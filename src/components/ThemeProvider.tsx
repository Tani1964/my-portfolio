import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'technical' | 'warm' | 'fun';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const setTheme = (newTheme: Theme) => {
    // Theme switching handled by parent components
    console.log('Theme change requested:', newTheme);
  };

  useEffect(() => {
    // Apply theme-specific classes to document
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-technical', 'theme-warm', 'theme-fun');
    
    // Add current theme class
    body.classList.add(`theme-${theme}`);

    // Apply CSS custom properties for theme
    const root = document.documentElement;
    
    switch (theme) {
      case 'technical':
        root.style.setProperty('--theme-primary', '#22c55e'); // green-500
        root.style.setProperty('--theme-primary-dark', '#16a34a'); // green-600
        root.style.setProperty('--theme-accent', '#10b981'); // emerald-500
        root.style.setProperty('--theme-bg', '#000000'); // black
        root.style.setProperty('--theme-bg-secondary', '#111827'); // gray-900
        root.style.setProperty('--theme-text', '#ffffff'); // white
        root.style.setProperty('--theme-text-secondary', '#9ca3af'); // gray-400
        break;
        
      case 'warm':
        root.style.setProperty('--theme-primary', '#ec4899'); // pink-500
        root.style.setProperty('--theme-primary-dark', '#db2777'); // pink-600
        root.style.setProperty('--theme-accent', '#f97316'); // orange-500
        root.style.setProperty('--theme-bg', '#fef7ff'); // purple-50
        root.style.setProperty('--theme-bg-secondary', '#ffffff'); // white
        root.style.setProperty('--theme-text', '#1f2937'); // gray-800
        root.style.setProperty('--theme-text-secondary', '#6b7280'); // gray-500
        break;
        
      case 'fun':
        root.style.setProperty('--theme-primary', '#8b5cf6'); // violet-500
        root.style.setProperty('--theme-primary-dark', '#7c3aed'); // violet-600
        root.style.setProperty('--theme-accent', '#06b6d4'); // cyan-500
        root.style.setProperty('--theme-bg', '#1e1b4b'); // indigo-900
        root.style.setProperty('--theme-bg-secondary', '#312e81'); // indigo-800
        root.style.setProperty('--theme-text', '#ffffff'); // white
        root.style.setProperty('--theme-text-secondary', '#c4b5fd'); // violet-300
        break;
    }

    return () => {
      // Cleanup on unmount
      body.classList.remove(`theme-${theme}`);
    };
  }, [theme]);

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme-${theme} transition-colors duration-500`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Theme utility hooks and functions
export const getThemeClasses = (theme: Theme) => {
  const baseClasses = {
    technical: {
      bg: 'bg-black',
      bgSecondary: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      primary: 'text-green-400',
      accent: 'text-green-500',
      border: 'border-green-500',
      borderSecondary: 'border-green-500/30',
      button: 'bg-green-500 hover:bg-green-400 text-black',
      buttonSecondary: 'border border-green-500 text-green-400 hover:bg-green-500/10'
    },
    warm: {
      bg: 'bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50',
      bgSecondary: 'bg-white/80',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      primary: 'text-pink-600',
      accent: 'text-orange-500',
      border: 'border-pink-300',
      borderSecondary: 'border-pink-200',
      button: 'bg-pink-500 hover:bg-pink-400 text-white',
      buttonSecondary: 'border border-pink-500 text-pink-600 hover:bg-pink-50'
    },
    fun: {
      bg: 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
      bgSecondary: 'bg-purple-800/50',
      text: 'text-white',
      textSecondary: 'text-purple-300',
      primary: 'text-purple-400',
      accent: 'text-cyan-400',
      border: 'border-purple-500',
      borderSecondary: 'border-purple-500/30',
      button: 'bg-purple-500 hover:bg-purple-400 text-white',
      buttonSecondary: 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
    }
  };

  return baseClasses[theme];
};

// Component wrapper for theme-aware styling
export function ThemedComponent({ 
  children, 
  className = '', 
  theme 
}: { 
  children: React.ReactNode; 
  className?: string; 
  theme?: Theme;
}) {
  const { theme: contextTheme } = useTheme();
  const activeTheme = theme || contextTheme;
  const themeClasses = getThemeClasses(activeTheme);
  
  return (
    <div className={`${themeClasses.bg} ${themeClasses.text} ${className}`}>
      {children}
    </div>
  );
}