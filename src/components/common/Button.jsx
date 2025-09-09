import React from 'react';
import { colors } from '../../constants/colors';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-3 font-medium transition-all focus:outline-none";
  
  const variants = {
    primary: {
        style: { backgroundColor: colors.accent },
        className: "text-white hover:opacity-90 rounded-lg !important"
    },
    secondary: {
        style: { 
        backgroundColor: colors.secondary,
        border: `1px solid ${colors.tertiary}`
        },
        className: "text-gray-300 hover:text-white rounded-lg !important"
    }
    };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <button
      style={currentVariant.style}
      className={`${baseStyles} ${currentVariant.className} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;