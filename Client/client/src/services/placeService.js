import api from './api';

export const placeService = {
  getAllPlaces: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return await api.get(`/places?${params}`);
  },

  getPlaceById: async (id) => {
    return await api.get(`/places/${id}`);
  },

  createPlace: async (placeData) => {
    return await api.post('/places', placeData);
  },

  updatePlace: async (id, placeData) => {
    return await api.put(`/places/${id}`, placeData);
  },

  deletePlace: async (id) => {
    return await api.delete(`/places/${id}`);
  },
};