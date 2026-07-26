import api from './api';

export const favoriteService = {
  getUserFavorites: async () => {
    return await api.get('/user/favorites');
  },

  toggleFavorite: async (placeId) => {
    return await api.post(`/user/favorites/${placeId}`);
  },
};