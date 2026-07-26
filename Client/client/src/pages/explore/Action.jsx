import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRunning, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

const Action = () => {
  const [items] = useState([
    { 
      id: '301', 
      name: 'Whistling Woods Go-Karting', 
      location: 'Athi River', 
      rating: 4.9, 
      damage: 'KES 3,500/- per session', 
      intensity: 'High Adrenaline', 
      surface: 'Track & Circuit',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop' 
    },
    { 
      id: '302', 
      name: 'Two Rivers Paintball & Action', 
      location: 'Ruaka, Nairobi', 
      rating: 4.7, 
      damage: 'KES 2,500/- per session', 
      intensity: 'Tactical Team Sport', 
      surface: 'Arena & Obstacles',
      image: 'https://images.unsplash.com/photo-1517649763962-0c6232660102?w=600&auto=format&fit=crop' 
    },
  ]);

  useInfiniteScroll((cb) => cb());

  return (
    <div className="space-y-10 pb-16">
      {/* Sapphire Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/30 p-8 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <FaRunning size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400">Adrenaline & Spatial Thrills</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Action & Adventures</h1>
            <p className="text-white/60 text-xs sm:text-sm font-medium">Go-karting, quad biking, paintball, and functional adrenaline circuits across Kenya.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((spot) => (
          <Link 
            key={spot.id} 
            to={`/places/${spot.id}`} 
            className="bg-slate-900/90 backdrop-blur-md border border-blue-500/20 rounded-3xl overflow-hidden group hover:border-blue-400/60 transition-all duration-500 shadow-xl flex flex-col hover:-translate-y-1"
          >
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-extrabold text-blue-400 flex items-center gap-1.5 border border-blue-500/30 shadow-lg">
                <FaStar size={11} />
                <span>{spot.rating}</span>
              </div>
              <span className="absolute bottom-4 left-4 bg-blue-500 text-slate-950 px-3.5 py-1 rounded-full text-[10px] font-extrabold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                Verified Circuit
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-white font-extrabold text-base group-hover:text-blue-400 transition-colors">{spot.name}</h3>
                <p className="text-white/60 text-xs flex items-center gap-1.5 font-medium">
                  <FaMapMarkerAlt size={12} className="text-blue-400" />
                  <span>{spot.location}</span>
                </p>
              </div>

              {/* Functional Action Badges */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-slate-950 border border-white/5 p-2.5 rounded-xl">
                  <span className="text-[9px] text-white/50 uppercase font-bold block">Intensity</span>
                  <span className="text-[11px] font-bold text-blue-300">{spot.intensity}</span>
                </div>
                <div className="bg-slate-950 border border-white/5 p-2.5 rounded-xl">
                  <span className="text-[9px] text-white/50 uppercase font-bold block">Setup</span>
                  <span className="text-[11px] font-bold text-white">{spot.surface}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs text-white/50 uppercase font-bold tracking-wider">Session Rate</span>
                <span className="text-xs font-extrabold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25">{spot.damage}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Action;