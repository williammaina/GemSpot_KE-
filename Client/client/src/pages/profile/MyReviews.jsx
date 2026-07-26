import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaFilter, FaCheckCircle, FaTrash } from 'react-icons/fa';

const MyReviews = () => {
  const [filterRating, setFilterRating] = useState('all');

  const [reviews, setReviews] = useState([
    { 
      id: 'r1', 
      placeId: '101',
      placeName: "CJ's Restaurant", 
      location: 'Village Market, Gigiri', 
      rating: 5.0, 
      date: '2 days ago', 
      damage: 'KES 5,500/- for two',
      comment: 'Absolute masterpiece of a dining experience! The service is world-class and the high-speed Wi-Fi made remote work seamless during the afternoon.' 
    },
    { 
      id: 'r2', 
      placeId: '201',
      placeName: 'Alchemist Bar', 
      location: 'Westlands, Nairobi', 
      rating: 4.8, 
      date: '2 weeks ago', 
      damage: 'KES 6,000/- for two',
      comment: 'Electric Friday night crowd and immaculate rooftop sound system. Highly recommended for weekend partying.' 
    },
    { 
      id: 'r3', 
      placeId: '1',
      placeName: 'Karura Forest', 
      location: 'Limuru Road', 
      rating: 4.9, 
      date: '1 month ago', 
      damage: 'KES 600/- Entry',
      comment: 'Peaceful morning hike under the lush canopy. Clean trails and very secure parking.' 
    }
  ]);

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(r => Math.floor(r.rating) === parseInt(filterRating));

  const deleteReview = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <FaStar size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Community Contributions</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">My Verified Reviews</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Feedback and ratings you've shared on verified spots across Kenya.</p>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex items-center justify-between bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-bold">
          <FaFilter className="text-amber-400" /> Filter by Rating:
        </div>
        <div className="flex items-center gap-1.5">
          {['all', '5', '4'].map((rate) => (
            <button
              key={rate}
              onClick={() => setFilterRating(rate)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold capitalize transition-all ${
                filterRating === rate
                  ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {rate === 'all' ? 'All Reviews' : `${rate} Stars`}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Review Cards */}
      {filteredReviews.length > 0 ? (
        <div className="space-y-6">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl group hover:border-amber-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Link to={`/places/${rev.placeId}`} className="text-base font-extrabold text-white hover:text-amber-400 transition-colors">
                      {rev.placeName}
                    </Link>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20 flex items-center gap-1">
                      <FaCheckCircle size={9} /> Verified Stay
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs flex items-center gap-1">
                    <FaMapMarkerAlt size={10} className="text-rose-400" />
                    <span>{rev.location}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-950 px-3 py-1.5 rounded-xl border border-neutral-800 text-xs font-bold text-amber-400 flex items-center gap-1 shadow-inner">
                    <FaStar size={11} />
                    <span>{rev.rating.toFixed(1)}</span>
                  </div>
                  <button 
                    onClick={() => deleteReview(rev.id)}
                    className="p-2 rounded-xl bg-neutral-950 hover:bg-rose-500/20 text-neutral-400 hover:text-rose-400 transition-colors border border-neutral-800"
                    title="Delete Review"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">
                "{rev.comment}"
              </p>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Damage for Two: <strong className="text-emerald-400">{rev.damage}</strong></span>
                <span className="text-[11px] text-neutral-500 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-neutral-900 border border-neutral-800 p-16 rounded-3xl text-center space-y-4 shadow-xl max-w-lg mx-auto">
          <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <FaStar size={32} />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">No Reviews Found</h2>
            <p className="text-neutral-400 text-xs leading-relaxed">You haven't submitted any reviews matching this filter yet. Visit a spot and share your damage-for-two experience!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;