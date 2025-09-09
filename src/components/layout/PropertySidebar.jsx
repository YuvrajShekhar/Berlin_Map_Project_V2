import React from 'react';
import { X, Home, Euro, Navigation, Phone, Heart, Navigation as Locate } from 'lucide-react';
import { colors } from '../../constants/colors';
import Button from '../common/Button';

const PropertySidebar = ({ isOpen, setIsOpen, property }) => {
  if (!property) return null;

  return (
    <div 
      className={`transition-all duration-300 ${isOpen ? 'w-80' : 'w-0'} overflow-hidden h-full`}
    >
      {isOpen && (
        <div 
          className="h-full p-6 space-y-6 backdrop-blur-2xl border-l"
          style={{
            background: 'rgba(2, 21, 38, 0.7)', // Reduced opacity for glass effect
            backdropFilter: 'blur(25px)',
            borderLeft: `1px solid rgba(110, 172, 218, 0.3)`,
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.6)',
            WebkitBackdropFilter: 'blur(25px)'
          }}
        >
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-6 right-6 p-2 rounded-full z-10"
            style={{
              background: 'rgba(110, 172, 218, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(110, 172, 218, 0.3)'
            }}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header with subtle glow */}
          <div className="text-center mb-6">
            <div 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
              style={{
                background: 'linear-gradient(135deg, rgba(110, 172, 218, 0.3), rgba(110, 172, 218, 0.1))',
                border: '1px solid rgba(110, 172, 218, 0.2)',
                boxShadow: '0 0 20px rgba(110, 172, 218, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Home className="w-6 h-6" style={{ color: colors.accent }} />
            </div>
            <h2 className="text-xl font-light text-white mb-2">Property Details</h2>
            <div 
              className="h-px mx-auto"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                width: '60%'
              }}
            />
          </div>

          {/* Address Section */}
          <div 
            className="p-4 rounded-xl"
            style={{
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(110, 172, 218, 0.2)'
            }}
          >
            <h2 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Address</h2>
            <p className="text-white text-lg font-light leading-relaxed">{property.address}</p>
          </div>

          {/* Property Details */}
          <div 
            className="p-4 rounded-xl space-y-4"
            style={{
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(110, 172, 218, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <Home className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-gray-300">{property.type}</p>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <Euro className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-white text-lg">
                <span className="font-medium">{property.price}</span>
                <span className="text-gray-400 text-sm"> /month</span>
              </p>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition-all">
              <div 
                className="p-2 rounded-full"
                style={{ 
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <Locate className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
              <p className="text-gray-300">{property.location}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 space-y-3">
            <Button 
              variant="primary" 
              className="w-full rounded-lg group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(110, 172, 218, 0.3), rgba(110, 172, 218, 0.1))',
                border: '1px solid rgba(110, 172, 218, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Contact Owner
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"
                style={{ transform: 'translateX(-100%)' }}
              />
            </Button>
            
            <Button 
              variant="secondary" 
              className="w-full rounded-lg group"
              style={{
                background: 'rgba(3, 52, 110, 0.3)',
                border: '1px solid rgba(20, 66, 114, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Heart className="w-4 h-4 inline mr-2" />
              Save Property
            </Button>
          </div>

          {/* Additional Info */}
          <div 
            className="pt-4 border-t p-4 rounded-xl"
            style={{ 
              borderColor: 'rgba(110, 172, 218, 0.2)',
              background: 'rgba(2, 21, 38, 0.5)',
              backdropFilter: 'blur(15px)'
            }}
          >
            <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="text-center p-3 rounded-lg"
                style={{
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(110, 172, 218, 0.1)'
                }}
              >
                <p className="text-gray-500 text-xs mb-1">Available from</p>
                <p className="text-white font-medium">{property.availableFrom || 'Immediately'}</p>
              </div>
              <div 
                className="text-center p-3 rounded-lg"
                style={{
                  background: 'rgba(110, 172, 218, 0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(110, 172, 218, 0.1)'
                }}
              >
                <p className="text-gray-500 text-xs mb-1">Min. lease</p>
                <p className="text-white font-medium">{property.minLease || '12 months'}</p>
              </div>
            </div>
          </div>

          {/* Futuristic decorative elements */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
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
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default PropertySidebar;