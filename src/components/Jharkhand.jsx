import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import jharkhandTouristPlaces from "../../public/data/places.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./mapStyles.css";

export default function JharkhandMap() {
  const [geoData, setGeoData] = useState(null);
  const [districtColors, setDistrictColors] = useState({});
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const layerGroupRef = useRef([]);
  const hoveredLayerRef = useRef(null);
  const selectedLayerRef = useRef(null);
  const [streetViewUrl, setStreetViewUrl] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null); // <-- NEW: stores marker click info

  // --- District Colors ---
  const colors = [
    "#FF6B6B", "#FFBE0B", "#FF9F1C", "#FFE066", "#F72585", "#FF89A0",
    "#EF476F", "#FF6363", "#4ECDC4", "#2EC4B6", "#06D6A0", "#4CC9F0",
    "#3A86FF", "#4361EE", "#8338EC", "#7209B7", "#FFD166", "#F4D35E",
    "#F9C74F", "#90BE6D", "#43AA8B", "#F9844A", "#F8961E", "#F94144"
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const assignDistrictColors = (features) => {
    if (!features) return {};
    const shuffledColors = shuffleArray(colors);
    const colorMap = {};
    features.forEach((feature, index) => {
      const districtName = feature.properties?.dtname || `district_${index}`;
      colorMap[districtName] = shuffledColors[index % shuffledColors.length];
    });
    return colorMap;
  };

  useEffect(() => {
    fetch("/data/JHARKHAND_DISTRICTS.geojson")
      .then((r) => r.json())
      .then((data) => {
        setGeoData(data);
        if (data && data.features) {
          setDistrictColors(assignDistrictColors(data.features));
          if (mapRef.current && data.features.length > 0) {
            const geoJsonLayer = L.geoJSON(data);
            const bounds = geoJsonLayer.getBounds();
            mapRef.current.fitBounds(bounds, { padding: [20, 20] });

            setTimeout(() => {
              mapRef.current.invalidateSize();
            }, 100);
          }
        }
      })
      .catch((err) => console.error("Failed to load geojson:", err));
  }, []);

  const getLayerElement = (layer) => {
    return layer._path || null;
  };

  const resetAll = () => {
    layerGroupRef.current.forEach((l) => {
      const element = getLayerElement(l);
      if (element) {
        element.classList.remove("hovered", "selected", "dimmed");
      }
    });
    selectedLayerRef.current = null;
    setMarkers([]);
    setSelectedDistrict(null);
    setSelectedPlace(null); // also clear selected marker info
  };

  // NEW FUNCTION: reapply selected district when coming back from Street View
  const reapplySelection = () => {
    if (!selectedDistrict) return;
    layerGroupRef.current.forEach((l) => {
      const districtName = l.feature?.properties?.dtname;
      const element = getLayerElement(l);
      if (districtName === selectedDistrict && element) {
        element.classList.add("selected");
        selectedLayerRef.current = l;
      } else if (element) {
        element.classList.add("dimmed");
      }
    });
  };

  const onEachFeature = (feature, layer) => {
    const districtName = feature.properties?.dtname || "Unknown";
    const districtColor = districtColors[districtName] || "#FF6B6B";

    layer.setStyle({
      fillColor: districtColor,
      weight: 1,
      opacity: 1,
      color: "#333333",
      fillOpacity: 0.85,
      className: "district-shape"
    });

    // Restore selection if this district is the one stored in state
    if (selectedDistrict === districtName) {
      const element = getLayerElement(layer);
      if (element) {
        element.classList.add("selected");
      }
      selectedLayerRef.current = layer;
      layerGroupRef.current.forEach((l) => {
        if (l !== layer) {
          const otherElement = getLayerElement(l);
          if (otherElement) {
            otherElement.classList.add("dimmed");
          }
        }
      });
    }

    layer.bindTooltip(districtName, {
      permanent: true,
      direction: "center",
      className: "district-label"
    });

    layerGroupRef.current.push(layer);

    layer.on({
      mouseover: () => {
        if (selectedLayerRef.current) return;
        hoveredLayerRef.current = layer;
        const element = getLayerElement(layer);
        if (element) element.classList.add("hovered");

        layerGroupRef.current.forEach((l) => {
          if (l !== layer) {
            const otherElement = getLayerElement(l);
            if (otherElement) {
              otherElement.classList.add("dimmed");
            }
          }
        });
        layer.bringToFront();
      },
      mouseout: () => {
        if (selectedLayerRef.current) return;
        const element = getLayerElement(layer);
        if (element) element.classList.remove("hovered");
        layerGroupRef.current.forEach((l) => {
          const otherElement = getLayerElement(l);
          if (otherElement) {
            otherElement.classList.remove("dimmed");
          }
        });
      },
      click: () => {
        if (selectedLayerRef.current) {
          const prevElement = getLayerElement(selectedLayerRef.current);
          if (prevElement) prevElement.classList.remove("selected");
          selectedLayerRef.current = null;
        }

        const element = getLayerElement(layer);
        const isAlreadySelected = element && element.classList.contains("selected");

        resetAll(); // keep this: we want to clear previous selection

        if (!isAlreadySelected) {
          if (element) element.classList.add("selected");
          selectedLayerRef.current = layer;
          setSelectedDistrict(districtName);
          layerGroupRef.current.forEach((l) => {
            if (l !== layer) {
              const otherElement = getLayerElement(l);
              if (otherElement) otherElement.classList.add("dimmed");
            }
          });

          const places = jharkhandTouristPlaces
            .filter((place) => place.district === districtName && place.streetView)
            .slice(0, 2);
          setMarkers(places);
        } else {
          setMarkers([]);
        }
      }
    });
  };

  const handleDeselect = () => {
    resetAll();
  };

  return (
    <div style={{ height: "70vh", width: "70%", position: "relative", margin: "20px auto" }}>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        {streetViewUrl ? (
          <div className="street-view-container" style={{ height: "100%", width: "100%", position: "relative" }}>
            <iframe
              src={streetViewUrl}
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <MapContainer
            center={[23.6, 85.3]}
            zoom={7.5}
            zoomSnap={0.1}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
            dragging={false}
            touchZoom={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            boxZoom={false}
            keyboard={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">Carto</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              subdomains={["a", "b", "c", "d"]}
            />
            {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}

            {/* --- MARKERS: no popup, just click handler --- */}
            {markers.map((place, idx) => (
              <Marker
                key={idx}
                position={[place.lat, place.lon]}
                eventHandlers={{
                  click: () => setSelectedPlace(place)
                }}
              />
            ))}
          </MapContainer>
        )}

        {/* --- CUSTOM INFO BOX FOR MARKER --- */}
        {selectedPlace && (
          <div className="info-box">
            <div className="info-box-header">
              <span className="info-box-title">{selectedPlace.name}</span>
              <button
                className="info-box-close"
                onClick={() => setSelectedPlace(null)}
              >
                ×
              </button>
            </div>
            {selectedPlace.streetView && (
              <button
                className="explore-button"
                onClick={() => {
                  setStreetViewUrl(selectedPlace.streetView);
                  setSelectedPlace(null);
                }}
              >
                Explore Now!
              </button>
            )}
          </div>
        )}

        {/* Single X Button (dual behavior) */}
        <div
          className="deselect-button"
          onClick={() => {
            if (streetViewUrl) {
              // If we are in Street View → Go back to Map
              setStreetViewUrl(null);
              setTimeout(() => reapplySelection(), 50); // Reapply highlight for selected district
            } else {
              // Otherwise → Deselect district
              handleDeselect();
            }
          }}
          title={streetViewUrl ? "Back to Map" : "Deselect district"}
          style={{
            display: selectedLayerRef.current || streetViewUrl ? "flex" : "none",
            position: "absolute",
            top: "15px",
            right: "15px"
          }}
        >
          ×
        </div>
      </div>
    </div>
  );
}
