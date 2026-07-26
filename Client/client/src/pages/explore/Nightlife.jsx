import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlassCheers, FaMapMarkerAlt, FaStar, FaClock, FaUsers } from 'react-icons/fa';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

const Nightlife = () => {
  const [items] = useState([
    { 
      id: '201', 
      name: 'Alchemist Bar', 
      location: 'Westlands, Nairobi', 
      rating: 4.8, 
      damage: 'KES 6,000/- for two', 
      crowd: 'Packed / High Vibe', 
      peakTime: '10:00 PM - Late',
      image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop' 
    },
    { 
      id: '202', 
      name: 'K1 ClubHouse', 
      location: 'Parklands, Nairobi', 
      rating: 4.6, 
      damage: 'KES 4,500/- for two', 
      crowd: 'Moderate / Lively', 
      peakTime: '6:00 PM - Midnight',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&auto=format&fit=crop' 
    },
  ]);

  useInfiniteScroll((cb) => cb());

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-rose-950/60 via-slate-950 to-slate-950 backdrop-blur-xl border border-rose-500/30 p-8 rounded-3xl shadow-[0_0_50px_rgba(244,63,94,0.15)]">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_25px_rgba(244,63,94,0.3)]">
            <FaGlassCheers size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-rose-400">High Energy & Rooftops</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Nightlife & VIP Lounges</h1>
            <p className="text-white/60 text-xs sm:text-sm font-medium">Experience Nairobi's dramatic clubs, rooftop lounges, and electric weekend party hotspots.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((spot) => (
          <Link 
            key={spot.id} 
            to={`/places/${spot.id}`} 
            className="bg-slate-950/90 backdrop-blur-md border border-rose-500/20 rounded-3xl overflow-hidden group hover:border-rose-500/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col hover:-translate-y-1"
          >
            <div className="relative h-60 w-full overflow-hidden bg-black">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 filter contrast-115" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-extrabold text-rose-400 flex items-center gap-1.5 border border-rose-500/30 shadow-lg">
                <FaStar size={11} />
                <span>{spot.rating}</span>
              </div>
              <span className="absolute bottom-4 left-4 bg-rose-500 text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                Prime Nightspot
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-slate-950">
              <div className="space-y-1.5">
                <h3 className="text-white font-extrabold text-base group-hover:text-rose-400 transition-colors">{spot.name}</h3>
                <p className="text-white/50 text-xs flex items-center gap-1.5 font-medium">
                  <FaMapMarkerAlt size={12} className="text-rose-400" />
                  <span>{spot.location}</span>
                </p>
              </div>

              {/* Crowd & Timing Badges */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs bg-white/5 border border-white/5 p-2.5 rounded-xl">
                  <span className="text-white/50 flex items-center gap-1.5 text-[10px] uppercase font-bold">
                    <FaUsers className="text-rose-400" /> Live Crowd
                  </span>
                  <span className="text-rose-300 font-extrabold">{spot.crowd}</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-white/5 border border-white/5 p-2.5 rounded-xl">
                  <span className="text-white/50 flex items-center gap-1.5 text-[10px] uppercase font-bold">
                    <FaClock className="text-amber-400" /> Peak Window
                  </span>
                  <span className="text-white font-extrabold">{spot.peakTime}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50 uppercase font-bold tracking-wider">Damage for Two</span>
                <span className="text-xs font-extrabold text-rose-400 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25">{spot.damage}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nightlife;