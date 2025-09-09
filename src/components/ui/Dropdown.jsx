import React from 'react';
import { colors } from '../../constants/colors';

const Dropdown = ({ trigger, items, isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          style={{ 
            backgroundColor: colors.secondary, 
            border: `1px solid ${colors.tertiary}` 
          }}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10"
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider && (
                <hr style={{ borderColor: colors.tertiary }} className="my-1" />
              )}
              <a 
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.tertiary}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;