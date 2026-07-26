import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedVibe, setSelectedVibe] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const resetFilters = () => {
    setSelectedBudget('all');
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedVibe('all');
    setSelectedCuisine('all');
  };

  return (
    <FilterContext.Provider value={{
      selectedBudget, setSelectedBudget,
      selectedCategory, setSelectedCategory,
      selectedLocation, setSelectedLocation,
      selectedVibe, setSelectedVibe,
      selectedCuisine, setSelectedCuisine,
      resetFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};