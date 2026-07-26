import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationFilter = ({ selectedLocation, onChange }) => {
  const locations = [
    { label: 'All Nairobi', value: 'all' },
    { label: 'CBD & Westlands', value: 'cbd-westlands' },
    { label: 'Karen & Langata', value: 'karen-langata' },
    { label: 'Gigiri & Village Market', value: 'gigiri' },
    { label: 'Kiambu & Thika Road', value: 'kiambu-thika' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
        <FaMapMarkerAlt className="text-rose-400 text-xs" /> Location / Zone
      </label>
      <div className="flex flex-wrap gap-2">
        {locations.map((loc) => {
          const isActive = selectedLocation === loc.value;
          return (
            <button
              key={loc.value}
              type="button"
              onClick={() => onChange(loc.value)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-rose-500 text-white border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/75 hover:border-rose-400/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              <FaMapMarkerAlt className={`text-[10px] ${isActive ? 'text-white' : 'text-rose-400'}`} />
              <span>{loc.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LocationFilter;