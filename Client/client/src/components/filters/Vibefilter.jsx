import React from 'react';
import { FaHeart } from 'react-icons/fa';

const VibeFilter = ({ selectedVibe, onChange }) => {
  const vibes = [
    { label: 'All Vibes', value: 'all' },
    { label: 'Laptop Friendly 💻', value: 'laptop-friendly' },
    { label: 'Date Night ❤️', value: 'date-night' },
    { label: 'Family Friendly 👨‍👩‍👧‍👦', value: 'family' },
    { label: 'High Energy / Party 🎉', value: 'party' },
    { label: 'Quiet & Scenic 🌿', value: 'quiet' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
        <FaHeart className="text-amber-400 text-xs" /> Vibe Check Filter
      </label>
      <div className="flex flex-wrap gap-2">
        {vibes.map((v) => {
          const isActive = selectedVibe === v.value;
          return (
            <button
              key={v.value}
              type="button"
              onClick={() => onChange(v.value)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/75 hover:border-amber-400/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              {v.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VibeFilter;