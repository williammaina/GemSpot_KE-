import { useState, useCallback } from 'react';
import api from '../services/api';

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (axiosParams) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api(axiosParams);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred during the request');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, sendRequest };
};