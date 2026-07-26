import api from './api';

export const reviewService = {
  getReviewsByPlace: async (placeId) => {
    return await api.get(`/places/${placeId}/reviews`);
  },

  createReview: async (placeId, reviewData) => {
    return await api.post(`/places/${placeId}/reviews`, reviewData);
  },

  deleteReview: async (reviewId) => {
    return await api.delete(`/reviews/${reviewId}`);
  },
};