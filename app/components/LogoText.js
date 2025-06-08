"use client";
import React from "react";

const LogoText = ({ 
  size = "default", 
  className = "",
  textColor = "default"
}) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-3xl",
    large: "text-4xl",
    xl: "text-5xl"
  };

  const textColorClasses = {
    default: "text-white",
    dark: "text-gray-800",
    gradient: "gradient-text"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span
        className={`${sizeClasses[size]} font-black ${textColorClasses[textColor]} leading-none tracking-tight`}
        style={{
          textShadow: textColor === 'default' ? '0 2px 8px rgba(0,0,0,0.5)' : 'none',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        MirRenTX
      </span>
    </div>
  );
};

export default LogoText;
