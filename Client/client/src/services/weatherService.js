import api from './api';

export const weatherService = {
  getNairobiWeather: async () => {
    return await api.get('/weather/nairobi');
  },
};