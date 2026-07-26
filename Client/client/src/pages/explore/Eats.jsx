import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaMapMarkerAlt, FaStar, FaCreditCard } from 'react-icons/fa';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

const Eats = () => {
  const [items] = useState([
    { 
      id: '101', 
      name: "CJ's Restaurant", 
      location: 'Village Market, Gigiri', 
      rating: 4.9, 
      damage: 'KES 5,500/- for two', 
      wifi: 'High Speed', 
      parking: 'Valet', 
      mpesa: 'Instant',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop' 
    },
    { 
      id: '102', 
      name: 'Artcaffé Gastrobar', 
      location: 'Westlands, Nairobi', 
      rating: 4.7, 
      damage: 'KES 4,800/- for two', 
      wifi: '50 Mbps', 
      parking: 'Secure', 
      mpesa: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop' 
    },
  ]);

  useInfiniteScroll((cb) => cb());

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <FaUtensils size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Culinary Excellence & Cafes</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Eats & Dining Experiences</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Discover top verified restaurants, coffee shops, and gastro-lounges with transparent logistics.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((spot) => (
          <Link 
            key={spot.id} 
            to={`/places/${spot.id}`} 
            className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-extrabold text-amber-400 flex items-center gap-1.5 border border-white/10 shadow-lg">
                <FaStar size={11} />
                <span>{spot.rating}</span>
              </div>
              <span className="absolute bottom-4 left-4 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-[10px] font-extrabold shadow-lg">
                Verified Kitchen
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-white font-extrabold text-base group-hover:text-amber-400 transition-colors">{spot.name}</h3>
                <p className="text-white/60 text-xs flex items-center gap-1.5 font-medium">
                  <FaMapMarkerAlt size={12} className="text-rose-400" />
                  <span>{spot.location}</span>
                </p>
              </div>

              {/* Logistics Tags */}
              <div className="grid grid-cols-3 gap-2 pt-2 pb-1">
                <div className="bg-slate-950/80 border border-white/5 rounded-xl p-2 text-center">
                  <span className="text-[9px] text-white/50 uppercase font-bold block">Wi-Fi</span>
                  <span className="text-[11px] font-bold text-emerald-400">{spot.wifi}</span>
                </div>
                <div className="bg-slate-950/80 border border-white/5 rounded-xl p-2 text-center">
                  <span className="text-[9px] text-white/50 uppercase font-bold block">Parking</span>
                  <span className="text-[11px] font-bold text-white">{spot.parking}</span>
                </div>
                <div className="bg-slate-950/80 border border-white/5 rounded-xl p-2 text-center">
                  <span className="text-[9px] text-white/50 uppercase font-bold block">M-Pesa</span>
                  <span className="text-[11px] font-bold text-emerald-400">{spot.mpesa}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs text-white/50 uppercase font-bold tracking-wider flex items-center gap-1">
                  <FaCreditCard className="text-amber-400 text-[10px]" /> Damage for Two
                </span>
                <span className="text-xs font-extrabold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">{spot.damage}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Eats;