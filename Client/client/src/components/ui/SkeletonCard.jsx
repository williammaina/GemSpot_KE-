import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md border border-white/8 rounded-3xl overflow-hidden shadow-2xl p-5 space-y-4">
      {/* Image Block Skeleton */}
      <div className="relative h-48 w-full bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
      </div>

      {/* Title & Metadata Skeleton */}
      <div className="space-y-2.5">
        <div className="h-5 w-3/4 bg-white/10 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
        <div className="h-4 w-1/2 bg-white/5 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      </div>

      {/* Action Button Skeleton */}
      <div className="h-11 w-full bg-white/5 rounded-2xl relative overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
      </div>
    </div>
  );
};

export default SkeletonCard;