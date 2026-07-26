import React from 'react';

const SectionHeader = ({ title, subtitle, action, accentColor = 'emerald' }) => {
  const accentColors = {
    emerald: 'bg-emerald-400 text-emerald-400',
    amber: 'bg-amber-400 text-amber-400',
    rose: 'bg-rose-400 text-rose-400',
  };

  const activeAccent = accentColors[accentColor] || accentColors.emerald;

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/8 relative">
      <div className="space-y-1.5">
        {subtitle && (
          <span className={`text-[10px] uppercase tracking-widest font-extrabold ${activeAccent.split(' ')[1]} inline-block`}>
            {subtitle}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span>{title}</span>
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
      
      {/* Subtle bottom glow bar accent */}
      <div className={`absolute -bottom-[1px] left-0 w-24 h-[2px] ${activeAccent.split(' ')[0]} shadow-[0_0_10px_currentColor]`} />
    </div>
  );
};

export default SectionHeader;