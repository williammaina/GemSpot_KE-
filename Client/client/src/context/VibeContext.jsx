import React, { createContext, useState } from 'react';

export const VibeContext = createContext();

export const VibeProvider = ({ children }) => {
  const [activeVibeMetric, setActiveVibeMetric] = useState('Moderate');

  const updateVibeMetric = (level) => {
    setActiveVibeMetric(level);
  };

  return (
    <VibeContext.Provider value={{ activeVibeMetric, updateVibeMetric }}>
      {children}
    </VibeContext.Provider>
  );
};