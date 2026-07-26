import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating = 5, interactive = false, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = interactive ? (hoverRating || rating) >= star : rating >= star;
        return (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            disabled={!interactive}
            onClick={() => interactive && onChange && onChange(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={`${
              interactive ? 'cursor-pointer hover:scale-125' : 'cursor-default'
            } transition-all duration-300 p-0.5 rounded-lg focus:outline-none`}
            aria-label={`Rate ${star} stars`}
          >
            <FaStar
              className={`transition-colors duration-300 ${
                active
                  ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                  : 'text-white/20 hover:text-white/40'
              }`}
              size={18}
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;