import React, { createContext, useState, useEffect } from 'react';
import { favoriteService } from '../services/favoriteService';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('gemspot_token');
        if (token) {
          const data = await favoriteService.getUserFavorites();
          setFavorites(data.favorites || data);
        }
      } catch (err) {
        console.error("Failed to load user favorites", err);
      }
    };
    fetchFavorites();
  }, []);

  const toggleFavorite = async (placeId) => {
    try {
      const data = await favoriteService.toggleFavorite(placeId);
      setFavorites(data.favorites || data);
    } catch (err) {
      console.error("Failed to toggle favorite", err);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};