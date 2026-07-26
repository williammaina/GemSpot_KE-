import api from './api';

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.token) {
      localStorage.setItem('gemspot_token', response.token);
    }
    return response;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    if (response.token) {
      localStorage.setItem('gemspot_token', response.token);
    }
    return response;
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } finally {
      localStorage.removeItem('gemspot_token');
    }
  },

  getCurrentUser: async () => {
    return await api.get('/auth/me');
  },

  forgotPassword: async (email) => {
    return await api.post('/auth/forgot-password', { email });
  },
};