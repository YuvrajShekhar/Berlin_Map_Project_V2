import React from 'react';
import { colors } from '../../constants/colors';

const PropertyMarker = ({ property, isSelected, onClick }) => {
  return (
    <button
      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 z-10"
      style={{ 
        left: property.x, 
        top: property.y,
      }}
      onClick={onClick}
    >
      <div 
        className={`${isSelected ? 'w-5 h-5 ring-8' : 'w-3 h-3 ring-4'} rounded-full ring-opacity-30 transition-all ${isSelected ? 'animate-pulse' : ''}`}
        style={{ 
          backgroundColor: colors.accent,
          ringColor: colors.accent,
          boxShadow: `0 0 ${isSelected ? '20px' : '10px'} ${colors.accent}`
        }}
      />
      {isSelected && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded">
            {property.address}
          </span>
        </div>
      )}
    </button>
  );
};

export default PropertyMarker;