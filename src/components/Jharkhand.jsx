import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./mapStyles.css";

export default function JharkhandMap() {
  const [geoData, setGeoData] = useState(null);
  const [districtColors, setDistrictColors] = useState({});
  const mapRef = useRef(null);
  const layerGroupRef = useRef([]);
  const hoveredLayerRef = useRef(null);
  const selectedLayerRef = useRef(null);

  // Define all 24 colors
  const colors = [
    "#FF6B6B", "#4ECDC4", "#FFE66D", "#1A535C", "#FF9F1C", "#2EC4B6", 
    "#E71D36", "#011627", "#FFBE0B", "#8338EC", "#FF6363", "#3A86FF", 
    "#F72585", "#7209B7", "#4CC9F0", "#FF89A0", "#4361EE", "#F4D35E", 
    "#06D6A0", "#EF476F", "#118AB2", "#FFD166", "#073B4C", "#F94144"
  ];

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Assign a unique color to each district
  const assignDistrictColors = (features) => {
    if (!features) return {};
    
    // Shuffle the colors to get a random order
    const shuffledColors = shuffleArray(colors);
    
    const colorMap = {};
    features.forEach((feature, index) => {
      const districtName = feature.properties?.dtname || `district_${index}`;
      // Use modulo to ensure we don't run out of colors
      colorMap[districtName] = shuffledColors[index % shuffledColors.length];
    });
    
    return colorMap;
  };

  useEffect(() => {
    fetch("/data/JHARKHAND_DISTRICTS.geojson")
      .then((r) => r.json())
      .then((data) => {
        setGeoData(data);
        // Assign colors once we have the GeoJSON data
        if (data && data.features) {
          setDistrictColors(assignDistrictColors(data.features));
        }
      })
      .catch((err) => console.error("Failed to load geojson:", err));
  }, []);

  // Helper function to get the DOM element from a Leaflet layer
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
  };

  const onEachFeature = (feature, layer) => {
    const districtName = feature.properties?.dtname || "Unknown";
    
    // Get the assigned color for this district
    const districtColor = districtColors[districtName] || "#FF6B6B";

    layer.setStyle({
      fillColor: districtColor,
      weight: 1,
      opacity: 1,
      color: "#333333",
      fillOpacity: 0.85,
      className: "district-shape"
    });

    layer.bindTooltip(districtName, {
      permanent: true,
      direction: "center",
      className: "district-label"
    });

    layerGroupRef.current.push(layer);

    layer.on({
      mouseover: () => {
        if (selectedLayerRef.current) return; // disable hover if something is selected
        hoveredLayerRef.current = layer;
        const element = getLayerElement(layer);
        if (element) {
          element.classList.add("hovered");
        }

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
        if (selectedLayerRef.current) return; // don't reset if something is selected
        const element = getLayerElement(layer);
        if (element) {
          element.classList.remove("hovered");
        }
        layerGroupRef.current.forEach((l) => {
          const otherElement = getLayerElement(l);
          if (otherElement) {
            otherElement.classList.remove("dimmed");
          }
        });
      },
      click: () => {
        // If we already have a selected district, clear it first
        if (selectedLayerRef.current) {
          const prevElement = getLayerElement(selectedLayerRef.current);
          if (prevElement) {
            prevElement.classList.remove("selected");
          }
          selectedLayerRef.current = null;
        }

        const element = getLayerElement(layer);
        const isAlreadySelected = element && element.classList.contains("selected");

        resetAll(); // fully reset map before applying new selection

        if (!isAlreadySelected) {
          // Select this one
          if (element) {
            element.classList.add("selected");
          }
          selectedLayerRef.current = layer;

          // Dim others except selected
          layerGroupRef.current.forEach((l) => {
            if (l !== layer) {
              const otherElement = getLayerElement(l);
              if (otherElement) {
                otherElement.classList.add("dimmed");
              }
            }
          });

          // Zoom to selected
          const bounds = layer.getBounds();
          if (mapRef.current && bounds.isValid()) {
            mapRef.current.fitBounds(bounds, { padding: [30, 30] });
          }
        }
      }
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[23.6, 85.3]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
        />
        {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
      </MapContainer>
    </div>
  );
}