import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20" />
        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
      </div>
    </div>
  );
};

export default LoadingSpinner;