import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { colors } from '../../constants/colors';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="px-6 py-4" style={{ backgroundColor: colors.primary }}>
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
          style={{ 
            backgroundColor: colors.secondary,
            focusRingColor: colors.accent 
          }}
          onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${colors.accent}`}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
        />
      </div>
    </div>
  );
};

export default SearchBar;