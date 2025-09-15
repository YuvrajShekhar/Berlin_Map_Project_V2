import React, { useState } from 'react';
import { Search, X, Filter, MapPin } from 'lucide-react';
import { colors } from '../../constants/colors';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative z-30 mx-auto max-w-md px-4">
      <div 
        className="relative"
        style={{
          background: 'rgba(2, 21, 38, 0.9)',
          border: `1px solid ${colors.accent}30`,
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex items-center px-4 py-3">
          {/* Search Icon */}
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search locations in Berlin..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm md:text-base"
          />

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Clear button */}
            {searchQuery && (
              <button
                onClick={handleClear}
                className="p-1.5 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            )}
            
            {/* Filter button */}
            <button className="p-1.5 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              <Filter className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Search suggestions dropdown */}
        {isFocused && searchQuery && (
          <div 
            className="absolute top-full left-0 right-0 mt-1 rounded-lg overflow-hidden"
            style={{
              background: colors.secondary,
              border: `1px solid ${colors.tertiary}`,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            {['Mitte', 'Prenzlauer Berg', 'Kreuzberg', 'Charlottenburg'].map((location, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-3 hover:bg-blue-500 hover:bg-opacity-10"
                style={{
                  borderBottom: index < 3 ? `1px solid ${colors.tertiary}` : 'none',
                }}
              >
                <MapPin className="w-4 h-4" style={{ color: colors.accent }} />
                <span>{location}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick filter tags */}
      <div className="flex gap-2 mt-3 justify-center">
        {['Apartments', 'Studios', 'Under €1000', 'Pet Friendly'].map((tag, index) => (
          <button
            key={index}
            className="px-3 py-1.5 rounded-full text-xs text-gray-300 transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white"
            style={{
              background: colors.secondary,
              border: `1px solid ${colors.tertiary}`,
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;