import React, { createContext, useContext, useState } from 'react';

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
const [places, setPlaces] = useState([]);
const [loading, setLoading] = useState(false);

const value = {
places,
setPlaces,
loading,
setLoading
};

return (
<PlaceContext.Provider value={value}>
{children}
</PlaceContext.Provider>
);
};

export const usePlaces = () => useContext(PlaceContext);