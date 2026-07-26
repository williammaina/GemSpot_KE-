import React, { createContext, useState, useEffect } from 'react';
import { weatherService } from '../services/weatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await weatherService.getNairobiWeather();
        setWeatherData(data.weather || data);
      } catch (err) {
        // Fallback local weather intelligence data for Nairobi
        setWeatherData({
          condition: "Light Afternoon Showers expected in Nairobi",
          tip: "Carry an umbrella if walking outdoors or opt for indoor seating.",
          temp: "22°C"
        });
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};