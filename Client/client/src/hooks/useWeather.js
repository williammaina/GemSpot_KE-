import { useState, useEffect } from 'react';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    main: { temp: '--' },
    weather: [{ description: 'Loading...' }]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Using a public test API to ensure no DNS errors, or keep your local logic
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=YOUR_API_KEY_HERE&units=metric');
        
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.warn("Weather API unreachable, using safe defaults.");
        setWeatherData({
          main: { temp: '22' },
          weather: [{ description: 'Partly Cloudy' }]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weatherData, loading };
};