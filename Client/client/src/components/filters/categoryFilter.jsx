import React from 'react';
import { FaCompass, FaTree, FaCoffee, FaGlassMartiniAlt, FaGamepad } from 'react-icons/fa';

const CategoryFilter = ({ selectedCategory, onChange }) => {
  const categories = [
    { label: 'All Spots', value: 'all', icon: FaCompass },
    { label: 'Nature & Scenery', value: 'nature', icon: FaTree },
    { label: 'Café & Eats', value: 'eats', icon: FaCoffee },
    { label: 'Nightlife', value: 'nightlife', icon: FaGlassMartiniAlt },
    { label: 'Action & Play', value: 'action', icon: FaGamepad },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-wider text-white/50">Discovery Category</label>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => onChange(cat.value)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/75 hover:border-emerald-400/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className={isActive ? 'text-slate-950' : 'text-emerald-400'} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;