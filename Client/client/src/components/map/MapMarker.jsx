import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ACCENT_CLASSES = {
  emerald: {
    base: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300 hover:border-emerald-400',
    active: 'bg-emerald-400 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.5)]',
  },
  amber: {
    base: 'bg-amber-500/15 border-amber-400/40 text-amber-300 hover:border-amber-400',
    active: 'bg-amber-400 text-slate-950 border-amber-300 ring-4 ring-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.5)]',
  },
  sapphire: {
    base: 'bg-blue-500/15 border-blue-400/40 text-blue-300 hover:border-blue-400',
    active: 'bg-blue-400 text-slate-950 border-blue-300 ring-4 ring-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.5)]',
  },
  ruby: {
    base: 'bg-rose-500/15 border-rose-400/40 text-rose-300 hover:border-rose-400',
    active: 'bg-rose-400 text-slate-950 border-rose-300 ring-4 ring-rose-500/30 shadow-[0_0_25px_rgba(244,63,94,0.5)]',
  },
};

const MapMarker = ({ place, isSelected, onClick }) => {
  const accent = place.accent || 'emerald';
  const styles = ACCENT_CLASSES[accent] || ACCENT_CLASSES.emerald;

  return (
    <button
      onClick={() => onClick(place)}
      className={`absolute p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
        isSelected
          ? `${styles.active} scale-125 z-30`
          : `${styles.base} z-10`
      }`}
      style={{
        top: place.topCoord || '50%',
        left: place.leftCoord || '50%',
      }}
      title={place.name}
    >
      <FaMapMarkerAlt size={14} />
      {!isSelected && (
        <span className="absolute -inset-1 rounded-full animate-ping opacity-25 bg-current pointer-events-none" />
      )}
    </button>
  );
};

export default MapMarker;