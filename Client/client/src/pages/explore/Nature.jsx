import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTree, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

const Nature = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Karura Forest', location: 'Limuru Road', rating: 4.8, damage: 'KES 600/- Entry', image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=600&auto=format&fit=crop' },
    { id: '2', name: 'Ngong Hills Hiking Trail', location: 'Ngong Town', rating: 4.7, damage: 'KES 500/- Guide', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop' },
    { id: '3', name: 'Oloolua Nature Trail', location: 'Karen', rating: 4.6, damage: 'KES 500/- Entry', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop' },
  ]);

  const fetchMore = (callback) => {
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        { id: String(prev.length + 1), name: 'Hell\'s Gate National Park', location: 'Naivasha', rating: 4.9, damage: 'KES 1,200/- Entry', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&auto=format&fit=crop' }
      ]);
      callback();
    }, 1000);
  };

  useInfiniteScroll(fetchMore);

  return (
    <div className="space-y-10 pb-16">
      {/* Scenic Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/80 backdrop-blur-xl border border-emerald-500/20 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-emerald-400/15 text-emerald-400 border border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <FaTree size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Scenic Discovery & Escape</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Nature & Outdoor Exploration</h1>
            <p className="text-white/60 text-xs sm:text-sm font-medium">Breathe fresh air across pristine Kenyan forests, tranquil hiking trails, and scenic escapes.</p>
          </div>
        </div>
      </div>

      {/* Spacious Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((spot) => (
          <Link
            key={spot.id}
            to={`/places/${spot.id}`}
            className="bg-slate-900/70 backdrop-blur-md border border-white/8 rounded-3xl overflow-hidden group hover:border-emerald-400/50 transition-all duration-500 shadow-xl flex flex-col hover:-translate-y-1"
          >
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-extrabold text-amber-400 flex items-center gap-1.5 border border-white/10 shadow-lg">
                <FaStar size={11} />
                <span>{spot.rating}</span>
              </div>
              <span className="absolute bottom-4 left-4 bg-emerald-400/90 text-slate-950 px-3 py-1 rounded-full text-[10px] font-extrabold shadow-lg">
                Verified Escape
              </span>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-white font-extrabold text-base group-hover:text-emerald-400 transition-colors">{spot.name}</h3>
                <p className="text-white/60 text-xs flex items-center gap-1.5 font-medium">
                  <FaMapMarkerAlt size={12} className="text-emerald-400" />
                  <span>{spot.location}</span>
                </p>
              </div>
              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs text-white/50 uppercase font-bold tracking-wider">Entry & Guide</span>
                <span className="text-xs font-extrabold text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">{spot.damage}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nature;