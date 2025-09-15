import React from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header 
      className="relative flex items-center justify-between px-6 py-5 border-b shadow-lg"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', // Dark grey to black gradient
        borderColor: 'rgba(110, 172, 218, 0.2)', // Subtle accent border
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Left side - Menu button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2.5 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-200 group"
        style={{
          border: '1px solid transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '1px solid rgba(110, 172, 218, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '1px solid transparent';
        }}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
        ) : (
          <Menu className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
        )}
      </button>

      {/* Center - Title with premium typography */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex items-center gap-3">
          {/* Title with premium font */}
          <h1 
            className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{
              fontFamily: "'Poppins', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffffff 0%, #6EACDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(110, 172, 218, 0.3)',
              letterSpacing: '0.02em'
            }}
          >
            BERLIN MAP
          </h1>
          
          {/* Subtitle - optional */}
          <span 
            className="hidden lg:inline-block text-xs font-light tracking-widest text-gray-400 ml-2"
            style={{
              fontFamily: "'Inter', 'SF Pro Text', -apple-system, sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}
          >
            PROJECT
          </span>
        </div>
      </div>

      {/* Right side - placeholder for symmetry or additional actions */}
      <div className="w-10 h-10">
        {/* This empty div maintains layout symmetry */}
        {/* You can add user avatar, notifications, etc. here later */}
      </div>

      {/* Premium accent line at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(110, 172, 218, 0.5) 20%, rgba(110, 172, 218, 0.5) 80%, transparent)',
        }}
      />
    </header>
  );
};

export default Navbar;