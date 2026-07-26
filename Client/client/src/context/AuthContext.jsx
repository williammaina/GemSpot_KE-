import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('gemspot_token');
        if (token) {
          const data = await authService.getCurrentUser();
          setUser(data.user || data);
        }
      } catch (err) {
        localStorage.removeItem('gemspot_token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user || data);
    return data;
  };

  const register = async (userData) => {
    const data = await authService.register(userData);
    setUser(data.user || data);
    return data;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};