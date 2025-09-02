import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SiteMode = 'catering' | 'store';

interface SiteModeContextType {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
  toggleMode: () => void;
}

const SiteModeContext = createContext<SiteModeContextType | undefined>(undefined);

interface SiteModeProviderProps {
  children: ReactNode;
}

export const SiteModeProvider: React.FC<SiteModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<SiteMode>('store');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'catering' ? 'store' : 'catering');
  };

  return (
    <SiteModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </SiteModeContext.Provider>
  );
};

export const useSiteMode = (): SiteModeContextType => {
  const context = useContext(SiteModeContext);
  if (!context) {
    throw new Error('useSiteMode must be used within a SiteModeProvider');
  }
  return context;
};