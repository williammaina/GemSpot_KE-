import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const CuisineFilter = ({ selectedCuisine, onChange }) => {
  const cuisines = [
    { label: 'All Cuisines', value: 'all' },
    { label: 'Kenyan Swahili & Choma 🍖', value: 'swahili-choma' },
    { label: 'Cafe & Continental ☕', value: 'continental' },
    { label: 'Asian & Chinese 🥢', value: 'asian' },
    { label: 'Italian & Pizza 🍕', value: 'italian' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
        <FaUtensils className="text-emerald-400 text-xs" /> Cuisine Focus
      </label>
      <div className="flex flex-wrap gap-2">
        {cuisines.map((c) => {
          const isActive = selectedCuisine === c.value;
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => onChange(c.value)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/75 hover:border-emerald-400/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CuisineFilter;