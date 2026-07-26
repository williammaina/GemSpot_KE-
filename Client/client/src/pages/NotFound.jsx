import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Soft Ambient Light Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-neutral-900/80 backdrop-blur-2xl border border-neutral-800/80 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10">
        <div className="inline-flex p-5 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.2)]">
          <FaCompass size={36} />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400">Off The Beaten Trail</span>
          <h1 className="text-3xl font-black tracking-tight text-white">404 - Spot Not Found</h1>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Looks like you've wandered off the map. The Nairobi gem, trail, or page you are looking for doesn't exist or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] cursor-pointer hover:-translate-y-0.5"
          >
            <FaArrowLeft size={12} />
            <span>Return to Master Discovery Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;