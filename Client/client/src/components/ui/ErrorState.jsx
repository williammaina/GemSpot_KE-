import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ErrorState = ({ 
  title = 'Failed to load data', 
  message = 'Please check your connection and try again.', 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-900/80 backdrop-blur-md border border-rose-500/20 rounded-3xl space-y-4 shadow-2xl">
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
        <HiOutlineExclamationCircle size={28} />
      </div>
      <div className="space-y-1">
        <h3 className="text-white font-extrabold text-base">{title}</h3>
        <p className="text-white/60 text-xs max-w-sm leading-relaxed">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-5 rounded-2xl text-xs transition-all duration-300 border border-white/10 hover:border-white/20 cursor-pointer shadow-lg"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;