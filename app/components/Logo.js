"use client";
import { useState } from "react";

const Logo = ({
  size = "default",
  variant = "full",
  className = "",
  showText = true,
  textColor = "default",
  animate = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations
  const sizes = {
    small: {
      container: "h-8",
      icon: "w-8 h-8",
      text: "text-lg",
      spacing: "gap-2",
      subtitle: "text-xs",
    },
    default: {
      container: "h-12",
      icon: "w-12 h-12",
      text: "text-2xl",
      spacing: "gap-3",
      subtitle: "text-xs",
    },
    large: {
      container: "h-16",
      icon: "w-16 h-16",
      text: "text-3xl",
      spacing: "gap-4",
      subtitle: "text-sm",
    },
    xl: {
      container: "h-20",
      icon: "w-20 h-20",
      text: "text-4xl",
      spacing: "gap-5",
      subtitle: "text-base",
    },
  };

  const textColorClasses = {
    default: "text-white",
    dark: "text-gray-800",
    gradient: "gradient-text",
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div
      className={`flex items-center ${currentSize.spacing} ${currentSize.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Icon */}
      <div
        className={`relative ${currentSize.icon} ${
          animate ? "transition-all duration-500" : ""
        } ${isHovered && animate ? "scale-110 rotate-12" : ""}`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="30%" stopColor="#8B5CF6" />
              <stop offset="60%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient
              id="iconGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Circle Background */}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="url(#bgGradient)"
            className={`${animate ? "transition-all duration-500" : ""} ${
              isHovered && animate ? "animate-pulse" : ""
            }`}
            filter="url(#glow)"
          />

          {/* Inner Glow */}
          <circle cx="50" cy="50" r="42" fill="url(#glowGradient)" />

          {/* Rental/Event Icon */}
          <g
            fill="url(#iconGradient)"
            className={`${animate ? "transition-all duration-500" : ""} ${
              isHovered && animate ? "scale-110" : ""
            }`}
            transform-origin="50 50"
          >
            {/* Tent/Event Structure */}
            <path
              d="M25 70 L50 25 L75 70 Z"
              fill="url(#iconGradient)"
              opacity="0.9"
            />
            <path
              d="M25 70 L50 25 L75 70 L70 70 L50 35 L30 70 Z"
              fill="rgba(255,255,255,0.4)"
            />

            {/* Center Pole */}
            <line
              x1="50"
              y1="25"
              x2="50"
              y2="70"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Base/Ground */}
            <ellipse
              cx="50"
              cy="70"
              rx="25"
              ry="3"
              fill="rgba(255,255,255,0.6)"
            />

            {/* Decorative Stars */}
            <g className={`${animate && isHovered ? "animate-pulse" : ""}`}>
              <path d="M35 45 L37 50 L32 50 Z" fill="rgba(255,255,255,0.8)" />
              <path d="M65 45 L67 50 L62 50 Z" fill="rgba(255,255,255,0.8)" />
            </g>

            {/* Top Flag */}
            <path
              d="M50 25 L56 20 L62 25 L56 30 Z"
              fill="#10B981"
              opacity="0.9"
            />
            <circle cx="50" cy="25" r="2" fill="rgba(255,255,255,0.9)" />
          </g>

          {/* Rotating Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.8"
            strokeDasharray="8,4"
            className={`${animate && isHovered ? "animate-spin" : ""}`}
            style={{ animationDuration: "4s" }}
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div
          className={`flex flex-col ${
            animate ? "transition-all duration-500" : ""
          } ${isHovered && animate ? "scale-105" : ""}`}
        >
          <div className={`font-bold ${currentSize.text} leading-none`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">
              Mir
            </span>
            <span className="bg-gradient-to-r from-teal-400 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
              Ren
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
              TX
            </span>
          </div>
          {size !== "small" && (
            <span
              className={`${currentSize.subtitle} ${
                textColorClasses[textColor] === "text-white"
                  ? "text-white/80"
                  : "text-gray-500"
              } font-semibold tracking-widest uppercase`}
            >
              Premium Events
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
