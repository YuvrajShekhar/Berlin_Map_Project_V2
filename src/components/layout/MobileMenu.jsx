import React from 'react';
import { X } from 'lucide-react';
import { colors } from '../../constants/colors';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'Map View', href: '#' },
    { label: 'Search Properties', href: '#' },
    { label: 'Saved Properties', href: '#' },
    { label: 'My Account', href: '#' },
    { label: 'Settings', href: '#' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 md:hidden"
      style={{ backgroundColor: 'rgba(2, 21, 38, 0.95)' }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: colors.secondary }}>
          <h2 className="text-xl font-light text-white">Menu</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-opacity-20 hover:bg-white rounded"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="text-gray-300 hover:text-white text-lg transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;