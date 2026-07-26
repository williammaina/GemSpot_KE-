import { useState, useEffect } from 'react';

export const useMapbox = (initialCoordinates = [-1.2921, 36.8219]) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulated Mapbox GL / Leaflet initialization hook for Nairobi local intel mapping
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { coordinates, setCoordinates, mapLoaded };
};