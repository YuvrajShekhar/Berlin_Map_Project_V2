import React, { useState } from 'react';
import { Menu, Home, Map, Settings, User } from 'lucide-react';
import { colors } from '../../constants/colors';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const sidebarItems = [
    { name: 'Dashboard', icon: Home, href: '#' },
    { name: 'Map View', icon: Map, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
    { name: 'Profile', icon: User, href: '#' },
  ];

  return (
    <aside 
      style={{ 
        backgroundColor: colors.primary, 
        borderRight: `1px solid ${colors.secondary}` 
      }}
      className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-2">
          {sidebarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-all duration-200"
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.secondary}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;