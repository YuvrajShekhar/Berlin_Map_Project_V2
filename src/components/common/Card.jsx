import React from 'react';
import { colors } from '../../constants/colors';

const Card = ({ title, content, children }) => {
  return (
    <div 
      style={{ 
        backgroundColor: colors.secondary, 
        border: `1px solid ${colors.tertiary}` 
      }}
      className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-300">{content}</p>
      {children}
    </div>
  );
};

export default Card;