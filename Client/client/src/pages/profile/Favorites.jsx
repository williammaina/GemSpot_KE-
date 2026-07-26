import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaMapMarkerAlt, FaStar, FaTrash } from 'react-icons/fa';

const Favorites = () => {
  // Populated mock state with fallback toggle for empty state preview
  const [favorites, setFavorites] = useState([
    { id: '1', name: 'Karura Forest', location: 'Limuru Road', rating: 4.8, damage: 'KES 600/- Entry', category: 'Nature', image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=600&auto=format&fit=crop' },
    { id: '101', name: "CJ's Restaurant", location: 'Village Market, Gigiri', rating: 4.9, damage: 'KES 5,500/-', category: 'Eats', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop' },
    { id: '201', name: 'Alchemist Bar', location: 'Westlands, Nairobi', rating: 4.8, damage: 'KES 6,000/-', category: 'Nightlife', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop' },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-rose-950/40 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-rose-500/20 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <FaHeart size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-rose-400">Bookmarked Destinations</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Saved Favorites</h1>
            <p className="text-white/60 text-xs sm:text-sm font-medium">Your personal collection of bookmarked Nairobi spots, hidden gems, and weekend escapes.</p>
          </div>
        </div>
        <div className="bg-neutral-950/80 border border-neutral-800 px-4 py-2 rounded-2xl text-xs font-bold text-rose-400 shadow-inner">
          {favorites.length} Saved Spots
        </div>
      </div>

      {/* Grid of Saved Cards or Fallback Empty State */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((spot) => (
            <div key={spot.id} className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden group hover:border-rose-500/40 transition-all duration-300 shadow-xl flex flex-col relative">
              <Link to={`/places/${spot.id}`} className="relative h-52 w-full overflow-hidden bg-neutral-950 block">
                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-rose-400 border border-white/10 shadow">
                  {spot.category}
                </div>
                <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-amber-400 flex items-center gap-1 border border-white/10 shadow">
                  <FaStar size={10} />
                  <span>{spot.rating}</span>
                </div>
              </Link>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <Link to={`/places/${spot.id}`} className="text-white font-bold text-sm group-hover:text-rose-400 transition-colors block">
                    {spot.name}
                  </Link>
                  <p className="text-neutral-400 text-xs flex items-center gap-1">
                    <FaMapMarkerAlt size={10} className="text-rose-400" />
                    <span>{spot.location}</span>
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Damage: <strong className="text-emerald-400">{spot.damage}</strong></span>
                  <button 
                    onClick={() => removeFavorite(spot.id)}
                    className="p-2 rounded-xl bg-neutral-950 hover:bg-rose-500/20 text-neutral-400 hover:text-rose-400 transition-colors border border-neutral-800"
                    title="Remove Favorite"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-neutral-900 border border-neutral-800 p-16 rounded-3xl text-center space-y-4 shadow-xl max-w-lg mx-auto">
          <div className="inline-flex p-4 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <FaHeart size={32} />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">No Favorite Spots Bookmarked Yet</h2>
            <p className="text-neutral-400 text-xs leading-relaxed">Explore pristine nature trails, elite cafes, and rooftops, then tap the heart icon to save them here!</p>
          </div>
          <div className="pt-2">
            <Link to="/explore/nature" className="inline-flex px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20">
              Explore Nairobi Spots Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;