import React, { useState } from 'react';
import ReviewCard from '../cards/ReviewCard';
import EmptyState from '../ui/EmptyState';
import { FaChevronDown } from 'react-icons/fa';

const ReviewList = ({ reviews = [] }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  if (!reviews || reviews.length === 0) {
    return <EmptyState title="No Reviews Yet" message="Be the first local contributor to drop a review and vibe check for this spot!" />;
  }

  const displayedReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {displayedReviews.map((review, idx) => (
          <div 
            key={review.id || idx}
            className="bg-slate-900/60 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-xl transition-all duration-300 hover:border-white/15"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            type="button"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 backdrop-blur-md shadow-md cursor-pointer"
          >
            <span>Load More Reviews</span>
            <FaChevronDown className="text-emerald-400 text-[10px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;