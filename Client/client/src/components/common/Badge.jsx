import React from 'react';

const Badge = ({ children, variant = 'success', className = '' }) => {
  const variants = {
    success: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    warning: 'bg-amber-400/10 text-amber-300 border-amber-400/20 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    danger: 'bg-rose-500/10 text-rose-300 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.15)]',
    neutral: 'bg-white/5 text-white/75 border-white/10',
    verified: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30 font-bold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md transition-all duration-300 ${variants[variant] || variants.neutral} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;