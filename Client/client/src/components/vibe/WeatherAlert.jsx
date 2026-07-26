import React from 'react';
import { FaCloudSunRain } from 'react-icons/fa';
import { useWeather } from '../../hooks/useWeather';

const WeatherAlert = () => {
  const { weatherData, loading } = useWeather();

  if (loading || !weatherData) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-md border border-amber-500/30 rounded-3xl p-5 flex items-start gap-4 shadow-xl">
      <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <FaCloudSunRain size={20} />
      </div>
      <div className="space-y-1.5 min-w-0">
        <div className="flex items-center gap-2">
          <h5 className="text-white font-extrabold text-xs uppercase tracking-wider text-amber-300">
            Intelligence Weather Advisory
          </h5>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
            {weatherData.temp || 'Nairobi'}
          </span>
        </div>
        <p className="text-white/90 text-xs font-semibold">{weatherData.condition}</p>
        <p className="text-white/60 text-xs leading-relaxed">{weatherData.tip}</p>
      </div>
    </div>
  );
};

export default WeatherAlert;