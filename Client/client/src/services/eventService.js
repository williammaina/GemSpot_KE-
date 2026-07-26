import api from './api';

export const eventService = {
  getAllEvents: async () => {
    return await api.get('/events');
  },

  getEventById: async (id) => {
    return await api.get(`/events/${id}`);
  },

  createEvent: async (eventData) => {
    return await api.post('/events', eventData);
  },
};