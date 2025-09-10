import { motion } from "framer-motion";
import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SideNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  theme?: 'technical' | 'warm';
  onBackToSelection?: () => void;
}

export function SideNavigation({ 
  activeSection, 
  onNavigate, 
  theme = 'technical',
  onBackToSelection 
}: SideNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigationItems = [
    {
      id: 'hero',
      label: 'Home',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 2,7 12,12 22,7 12,2"/>
          <polyline points="2,17 12,22 22,17"/>
          <polyline points="2,12 12,17 22,12"/>
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Tani1964',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:tanitoluwa.ifegbesan@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  // Theme-aware styles
  const getThemeStyles = () => {
    if (theme === 'warm') {
      return {
        bg: 'bg-white/95 backdrop-blur-md',
        border: 'border-pink-200',
        text: 'text-gray-800',
        textSecondary: 'text-gray-600',
        accent: 'text-pink-600',
        activeAccent: 'text-pink-600',
        activeBg: 'bg-pink-50',
        activeBorder: 'border-pink-300',
        hoverBg: 'hover:bg-pink-50',
        profileBorder: 'border-pink-400',
        onlineIndicator: 'bg-pink-500'
      };
    }
    
    // Technical theme (default)
    return {
      bg: 'bg-gray-900/95 backdrop-blur-md',
      border: 'border-green-500/30',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      accent: 'text-green-400',
      activeAccent: 'text-green-400',
      activeBg: 'bg-green-500/20',
      activeBorder: 'border-green-500/30',
      hoverBg: 'hover:bg-gray-800/50',
      profileBorder: 'border-green-500',
      onlineIndicator: 'bg-green-500'
    };
  };

  const themeStyles = getThemeStyles();

  return (
    <>
      {/* Side Navigation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed left-0 top-0 h-full ${themeStyles.bg} border-r ${themeStyles.border} z-50 transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className={`p-4 border-b ${themeStyles.border}`}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${themeStyles.profileBorder}`}>
                  <ImageWithFallback
                    src="/img/small.jpeg"
                    alt="Tanitoluwa Samuel Ifegbesan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${themeStyles.onlineIndicator} rounded-full border-2 ${
                  theme === 'warm' ? 'border-white' : 'border-gray-900'
                }`}></div>
              </div>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="flex-1 min-w-0"
                >
                  <div className={`${themeStyles.text} font-bold text-sm truncate`}>Tanitoluwa</div>
                  <div className={`${themeStyles.accent} text-xs font-mono`}>Software Engineer</div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 py-6">
            <div className="space-y-2 px-2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                    activeSection === item.id
                      ? `${themeStyles.activeBg} ${themeStyles.activeAccent} border ${themeStyles.activeBorder}`
                      : `${themeStyles.textSecondary} ${themeStyles.hoverBg} hover:${themeStyles.text}`
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`flex-shrink-0 ${
                    activeSection === item.id ? themeStyles.activeAccent : `${themeStyles.textSecondary} group-hover:${themeStyles.text}`
                  }`}>
                    {item.icon}
                  </div>
                  
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="font-mono text-sm truncate"
                    >
                      {item.label}
                    </motion.span>
                  )}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute left-0 w-1 h-6 ${theme === 'warm' ? 'bg-pink-500' : 'bg-green-500'} rounded-r-full`}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className={`p-4 border-t ${themeStyles.border}`}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="mb-4"
              >
                <div className={`${themeStyles.textSecondary} text-xs font-mono mb-3`}>Connect</div>
              </motion.div>
            )}
            
            <div className={`flex ${isExpanded ? 'flex-col space-y-2' : 'flex-col space-y-3'}`}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center space-x-3 p-2 rounded-lg ${themeStyles.textSecondary} hover:${themeStyles.accent} transition-colors ${
                    isExpanded ? 'justify-start' : 'justify-center'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {link.icon}
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="text-sm font-mono"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Selection & Settings */}
          <div className={`p-4 border-t ${themeStyles.border} space-y-2`}>
            {/* Back to Track Selection */}
            {onBackToSelection && (
              <motion.button
                onClick={onBackToSelection}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg ${themeStyles.textSecondary} hover:${themeStyles.accent} transition-colors ${
                  isExpanded ? 'justify-start' : 'justify-center'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-sm font-mono"
                  >
                    Switch Track
                  </motion.span>
                )}
              </motion.button>
            )}

            
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}