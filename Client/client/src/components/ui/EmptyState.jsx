import React from 'react';
import { HiOutlineFolderOpen } from 'react-icons/hi';

const EmptyState = ({ 
  title = 'No Gems Found', 
  message = 'Try adjusting your search criteria or filters to find spots matching your vibe.',
  actionLabel,
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl space-y-4 shadow-2xl">
      <div className="p-4 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
        <HiOutlineFolderOpen size={28} />
      </div>
      <div className="space-y-1">
        <h3 className="text-white font-extrabold text-base">{title}</h3>
        <p className="text-white/60 text-xs max-w-sm leading-relaxed">{message}</p>
      </div>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-2 inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold py-2.5 px-5 rounded-2xl text-xs transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;