import React from 'react';
import { FaUsers } from 'react-icons/fa';

const CrowdMeter = ({ level = 'Moderate', percentage = 60 }) => {
  const getStatusConfig = () => {
    if (percentage > 75) {
      return {
        bar: 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]',
        text: 'text-rose-400',
        pulse: 'bg-rose-500',
      };
    }
    if (percentage > 40) {
      return {
        bar: 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        text: 'text-amber-400',
        pulse: 'bg-amber-500',
      };
    }
    return {
      bar: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
      text: 'text-emerald-400',
      pulse: 'bg-emerald-500',
    };
  };

  const config = getStatusConfig();

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl p-5 space-y-3.5 shadow-xl">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-white/60 flex items-center gap-2 uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.pulse} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${config.pulse}`}></span>
          </span>
          <FaUsers className="text-emerald-400 text-sm" /> Live Crowd Meter
        </span>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-slate-950 border border-white/10 ${config.text}`}>
          {level} <span className="text-white/40 font-normal">({percentage}%)</span>
        </span>
      </div>
      <div className="w-full h-2.5 bg-slate-950/80 rounded-full overflow-hidden border border-white/10 p-0.5">
        <div
          className={`h-full rounded-full transition-all duration-700 ${config.bar}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default CrowdMeter;