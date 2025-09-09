import React from 'react';
import { colors } from '../../constants/colors';
import Card from '../common/Card';

const MainContent = () => {
  const cards = [
    {
      title: 'Feature Card 1',
      content: 'This is where your content will go. The app is ready for expansion.'
    },
    {
      title: 'Feature Card 2',
      content: 'Add your map component here when ready.'
    },
    {
      title: 'Feature Card 3',
      content: 'Expandable architecture for future features.'
    }
  ];

  return (
    <main className="flex-1 p-6" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome to Your App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <div 
          style={{ 
            backgroundColor: colors.secondary, 
            border: `1px solid ${colors.tertiary}` 
          }}
          className="mt-8 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Color Palette Reference</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div 
                style={{ backgroundColor: colors.primary, border: '1px solid #6b7280' }}
                className="w-10 h-10 rounded"
              ></div>
              <span className="text-gray-300">#021526 (Primary)</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                style={{ backgroundColor: colors.secondary, border: '1px solid #6b7280' }}
                className="w-10 h-10 rounded"
              ></div>
              <span className="text-gray-300">#03346E (Secondary)</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                style={{ backgroundColor: colors.tertiary, border: '1px solid #6b7280' }}
                className="w-10 h-10 rounded"
              ></div>
              <span className="text-gray-300">#144272 (Tertiary)</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                style={{ backgroundColor: colors.accent, border: '1px solid #6b7280' }}
                className="w-10 h-10 rounded"
              ></div>
              <span className="text-gray-300">#6EACDA (Accent)</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;