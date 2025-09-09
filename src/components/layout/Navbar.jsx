import React from 'react';
import { Menu, X } from 'lucide-react';
import { colors } from '../../constants/colors';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header 
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ 
        backgroundColor: colors.primary,
        borderColor: colors.secondary 
      }}
    >
      <h1 className="text-2xl font-light text-white">Berlin Map Project</h1>
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 hover:bg-opacity-20 hover:bg-white rounded transition-colors"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
    </header>
  );
};

export default Navbar;