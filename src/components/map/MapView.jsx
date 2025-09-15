import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { colors } from '../../constants/colors';

// Custom dark futuristic icon
const createCustomIcon = (isSelected = false) => {
  return icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${colors.accent}" />
            <stop offset="100%" stop-color="#8EC5FC" />
          </linearGradient>
        </defs>
        <path d="M15 0C9.5 0 5 4.5 5 10C5 17.5 15 40 15 40S25 17.5 25 10C25 4.5 20.5 0 15 0Z" 
              fill="${isSelected ? 'url(#gradient)' : colors.accent}" 
              filter="${isSelected ? 'url(#glow)' : 'none'}"
              stroke="${colors.tertiary}" 
              stroke-width="1"/>
        ${isSelected ? `
        <circle cx="15" cy="12" r="3" fill="${colors.primary}" />
        <circle cx="15" cy="12" r="1" fill="${colors.accent}" />
        ` : ''}
      </svg>
    `),
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  });
};

const MapView = ({ properties, selectedProperty, onPropertySelect }) => {
  // Berlin coordinates
  const berlinCenter = [52.5200, 13.4050];
  
  // Custom tile layer for dark futuristic theme
  const customTileLayer = `
    https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?style=element:labels%7Cvisibility:off&style=element:geometry.fill%7Chue:%2303346e%7Csaturation:0.3%7Clightness:-0.2
  `;

  return (
    <div className="flex-1 relative" style={{ backgroundColor: colors.primary }}>
      <MapContainer
        center={berlinCenter}
        zoom={11}
        style={{ 
      height: '100%', 
      width: '100%', 
      background: colors.primary,
      position: 'relative',
      zIndex: 10
    }}
        zoomControl={true}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        attributionControl={false}
      >
        {/* Dark Futuristic Tile Layer */}
        <TileLayer
          url={customTileLayer}
        />
        
        {/* Custom Attribution (optional) */}
        <div className="leaflet-bottom leaflet-right">
          <div className="leaflet-control-attribution leaflet-control" 
               style={{ background: 'rgba(2, 21, 38, 0.8)', color: colors.accent, padding: '4px 8px', fontSize: '10px' }}>
            © OpenStreetMap contributors | Berlin Map Project
          </div>
        </div>

        {/* Property Markers */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={createCustomIcon(selectedProperty?.id === property.id)}
            eventHandlers={{
              click: () => onPropertySelect(property),
            }}
          >
            <Popup
              className="custom-popup"
              closeButton={false}
            >
              <div className="p-3" style={{ 
                background: colors.primary, 
                color: 'white',
                border: `1px solid ${colors.accent}`,
                borderRadius: '8px',
                minWidth: '200px'
              }}>
                <h3 className="font-semibold text-sm mb-1" style={{ color: colors.accent }}>
                  {property.address}
                </h3>
                <p className="text-lg font-bold mb-1">{property.price}/month</p>
                <p className="text-xs text-gray-300 mb-2">{property.type}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2 py-1 rounded-full" 
                        style={{ background: colors.secondary, color: colors.accent }}>
                    {property.location}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Custom CSS for map elements */}
      <style>{`
        .leaflet-container {
          background: ${colors.primary};
          font-family: inherit;
        }
        
        .leaflet-control-zoom a {
          background: ${colors.secondary} !important;
          color: ${colors.accent} !important;
          border: 1px solid ${colors.tertiary} !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: ${colors.tertiary} !important;
        }
        
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: 0 0 20px rgba(110, 172, 218, 0.3) !important;
          border-radius: 8px !important;
        }
        
        .leaflet-popup-tip {
          background: ${colors.primary} !important;
          border: 1px solid ${colors.accent} !important;
        }
        
        .leaflet-bar a.leaflet-disabled {
          background: ${colors.tertiary} !important;
          color: #666 !important;
        }
        
        /* Custom scrollbar for popup */
        .leaflet-popup-content {
          margin: 0 !important;
          line-height: 1.4 !important;
        }
        
        /* Pulse animation for selected marker */
        @keyframes pulse-glow {
          0% { filter: drop-shadow(0 0 5px ${colors.accent}); }
          50% { filter: drop-shadow(0 0 20px ${colors.accent}); }
          100% { filter: drop-shadow(0 0 5px ${colors.accent}); }
        }
        
        .leaflet-marker-icon[style*="filter: url(#glow)"] {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default MapView;