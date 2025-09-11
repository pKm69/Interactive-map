// src/App.jsx
import React from "react";
import JharkhandMap from "./components/Jharkhand";
import "./index.css";

function App() {
  return (
    <div>
      <header style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        textAlign: 'center',
        borderBottom: '2px solid #dee2e6'
      }}>
        <h1 style={{ 
          margin: '0 0 10px 0', 
          color: '#343a40',
          fontSize: '2.5rem'
        }}>
          Jharkhand Districts Map
        </h1>
        <p style={{ 
          margin: '0', 
          color: '#6c757d',
          fontSize: '1.1rem'
        }}>
          Interactive map showing all 24 districts of Jharkhand. Click on any district to zoom in and explore.
        </p>
      </header>
      <JharkhandMap />
      <footer style={{ 
        padding: '15px 20px', 
        backgroundColor: '#343a40', 
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0', fontSize: '0.9rem' }}>
          © 2024 Jharkhand Districts Map | Data visualization of administrative boundaries
        </p>
      </footer>
    </div>
  );
}

export default App;
