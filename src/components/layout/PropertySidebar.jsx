import React from 'react';
import { X, Home, Euro, Navigation, Phone, Heart, Navigation as Locate } from 'lucide-react';
import { colors } from '../../constants/colors';
import Button from '../common/Button';

const PropertySidebar = ({ isOpen, setIsOpen, property }) => {
  if (!property) return null;

  return (
    <>
      {/* Overlay backdrop when sidebar is open on mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar - now positioned as overlay */}
      <div 
        className={`right-0 top-0 h-full z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-80`}
      >
        <div 
          className="h-full p-6 space-y-6 overflow-y-auto"
          style={{
            // Enhanced glassmorphism with multiple layers
            background: `linear-gradient(135deg, 
              rgba(2, 21, 38, 0.8) 0%, 
              rgba(3, 52, 110, 0.6) 50%, 
              rgba(2, 21, 38, 0.8) 100%)`,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari support
            borderLeft: `1px solid rgba(110, 172, 218, 0.3)`,
            boxShadow: `
              -10px 0 40px rgba(0, 0, 0, 0.8),
              inset 1px 0 0 rgba(110, 172, 218, 0.2),
              inset -1px 0 0 rgba(110, 172, 218, 0.1)
            `,
          }}
        >
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-6 right-6 p-2 rounded-full z-10 hover-lift"
            style={{
              background: 'rgba(110, 172, 218, 0.2)',
              backdropFilter: 'blur(10px) saturate(150%)',
              WebkitBackdropFilter: 'blur(10px) saturate(150%)',
              border: '1px solid rgba(110, 172, 218, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header with enhanced glow */}
          <div className="text-center mb-6">
            <div 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 hover-lift"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(110, 172, 218, 0.4) 0%, 
                  rgba(110, 172, 218, 0.2) 100%)`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(110, 172, 218, 0.3)',
                boxShadow: `
                  0 0 30px rgba(110, 172, 218, 0.4),
                  inset 0 0 20px rgba(110, 172, 218, 0.1)
                `,
              }}
            >
              <Home className="w-6 h-6" style={{ color: colors.accent }} />
            </div>
            <h2 className="text-xl font-light text-white mb-2">Property Details</h2>
            <div 
              className="h-px mx-auto"
              style={{
                background: `linear-gradient(90deg, 
                  transparent, 
                  ${colors.accent} 20%, 
                  ${colors.accent} 80%, 
                  transparent)`,
                width: '60%',
                boxShadow: `0 0 10px ${colors.accent}`
              }}
            />
          </div>

          {/* Address Section with improved glass */}
          <div 
            className="p-4 rounded-xl hover-lift"
            style={{
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(16px) brightness(1.1)',
              WebkitBackdropFilter: 'blur(16px) brightness(1.1)',
              border: '1px solid rgba(110, 172, 218, 0.25)',
              boxShadow: 'inset 0 1px 0 rgba(110, 172, 218, 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Address</h2>
            <p className="text-white text-lg font-light leading-relaxed">{property.address}</p>
          </div>

          {/* Property Details with layered glass */}
          <div 
            className="p-4 rounded-xl space-y-4"
            style={{
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(16px) brightness(1.1)',
              WebkitBackdropFilter: 'blur(16px) brightness(1.1)',
              border: '1px solid rgba(110, 172, 218, 0.25)',
              boxShadow: 'inset 0 1px 0 rgba(110, 172, 218, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(110, 172, 218, 0.2)'
                }}
              >
                <Home className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-gray-300">{property.type}</p>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(110, 172, 218, 0.2)'
                }}
              >
                <Euro className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-white text-lg">
                <span className="font-medium">{property.price}</span>
                <span className="text-gray-400 text-sm"> /month</span>
              </p>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(110, 172, 218, 0.2)'
                }}
              >
                <Locate className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-gray-300">{property.location}</p>
            </div>
          </div>

          {/* Action Buttons with enhanced glass */}
          <div className="pt-4 space-y-3">
            <button 
              className="w-full py-3 rounded-lg group relative overflow-hidden hover-lift transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(110, 172, 218, 0.3), rgba(110, 172, 218, 0.15))',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(110, 172, 218, 0.4)',
                color: 'white'
              }}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Contact Owner
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, white, transparent)',
                  animation: 'shimmer 1.5s infinite'
                }}
              />
            </button>
            
            <button 
              className="w-full py-3 rounded-lg hover-lift transition-all"
              style={{
                background: 'rgba(3, 52, 110, 0.4)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(20, 66, 114, 0.4)',
                color: 'white'
              }}
            >
              <Heart className="w-4 h-4 inline mr-2" />
              Save Property
            </button>
          </div>

          {/* Quick Stats with improved glass layers */}
          <div 
            className="pt-4 border-t p-4 rounded-xl"
            style={{ 
              borderColor: 'rgba(110, 172, 218, 0.2)',
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(110, 172, 218, 0.2)'
            }}
          >
            <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="text-center p-3 rounded-lg"
                style={{
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(110, 172, 218, 0.15)'
                }}
              >
                <p className="text-gray-500 text-xs mb-1">Available from</p>
                <p className="text-white font-medium">{property.availableFrom || 'Immediately'}</p>
              </div>
              <div 
                className="text-center p-3 rounded-lg"
                style={{
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(110, 172, 218, 0.15)'
                }}
              >
                <p className="text-gray-500 text-xs mb-1">Min. lease</p>
                <p className="text-white font-medium">{property.minLease || '12 months'}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <div 
              className="h-px mx-auto mb-2"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                width: '40%',
                opacity: 0.5
              }}
            />
            <p className="text-gray-500 text-xs">Berlin Map Project © 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySidebar;