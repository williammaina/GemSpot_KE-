import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { FaImage, FaPaperPlane, FaShieldAlt } from 'react-icons/fa';

const ReviewForm = ({ onSubmitReview }) => {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [vibeTag, setVibeTag] = useState('Laptop Friendly & Quiet');
  const [damageConfirmed, setDamageConfirmed] = useState('');
  const [mediaAttached, setMediaAttached] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitReview) {
      onSubmitReview({ rating, content, vibeTag, damageConfirmed, mediaAttached });
    }
    setContent('');
    setDamageConfirmed('');
    setMediaAttached(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 space-y-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <h4 className="text-white font-extrabold text-base flex items-center gap-2">
          <FaShieldAlt className="text-emerald-400 text-sm" />
          Drop a Vibe Check & Review
        </h4>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
          Verified Local
        </span>
      </div>
      
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-white/50">Rating Score</label>
        <RatingStars rating={rating} interactive={true} onChange={(val) => setRating(val)} />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-white/50">Your Experience & Logistics</label>
        <textarea
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="How was the service? Did the M-Pesa till work? Is parking secure?"
          className="w-full bg-slate-950/80 border border-white/10 rounded-2xl p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-white/50">Primary Vibe Tag</label>
          <select
            value={vibeTag}
            onChange={(e) => setVibeTag(e.target.value)}
            className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
          >
            <option value="Laptop Friendly & Quiet">Laptop Friendly & Quiet</option>
            <option value="Date Night Romantic">Date Night Romantic</option>
            <option value="Lively Party & Music">Lively Party & Music</option>
            <option value="Family Outing & Space">Family Outing & Space</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-white/50">Actual Damage For Two (KES)</label>
          <input
            type="text"
            value={damageConfirmed}
            onChange={(e) => setDamageConfirmed(e.target.value)}
            placeholder="e.g. KES 3,500/-"
            className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-3.5 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Optional Media Upload Area */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-white/50">Attach Photos / Vibe Proof (Optional)</label>
        <div 
          onClick={() => setMediaAttached(!mediaAttached)}
          className={`cursor-pointer border-2 border-dashed rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 backdrop-blur-md ${
            mediaAttached 
              ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-300' 
              : 'border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaImage className={mediaAttached ? 'text-emerald-400 text-lg' : 'text-white/40 text-lg'} />
          <span className="text-xs font-semibold">
            {mediaAttached ? 'Photo attached successfully! Click to change' : 'Click to upload spot photos or bill screenshot'}
          </span>
          <span className="text-[10px] text-white/40">PNG, JPG, WEBP up to 10MB</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl text-xs transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
      >
        <span>Submit Verified Review</span>
        <FaPaperPlane size={12} />
      </button>
    </form>
  );
};

export default ReviewForm;