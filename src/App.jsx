import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import SearchBar from './components/layout/SearchBar';
import PropertySidebar from './components/layout/PropertySidebar';
import MobileMenu from './components/layout/MobileMenu';
import MapView from './components/map/MapView';
import { colors, cssVariables } from './constants/colors';
import { properties } from './constants/properties';
import './App.css';

// Inject CSS variables
document.documentElement.style.cssText = cssVariables;

function App() {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setIsSidebarOpen(true);
  };

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: colors.primary }}>
      {/* Header - Only Navbar now */}
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area - Map takes full remaining height */}
      <div className="flex-1 flex relative overflow-hidden">
          {/* Map - Full width and height */}
          <MapView 
            properties={properties}
            selectedProperty={selectedProperty}
            onPropertySelect={handlePropertySelect}
          />

        {/* Floating Search Bar - Overlays the map with higher z-index */}
          <div className="absolute top-4 left-0 right-0 z-30">
            <SearchBar />
          </div>

          {/* Property Sidebar */}
          <PropertySidebar 
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            property={selectedProperty}
          />

        {/* Mobile Toggle Sidebar Button */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden fixed bottom-4 right-4 p-3 rounded-full shadow-lg z-20"
            style={{ 
              backgroundColor: colors.accent,
              boxShadow: '0 10px 30px rgba(110, 172, 218, 0.4)',
            }}
          >
            <MapPin className="w-6 h-6 text-white" />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}

export default App;