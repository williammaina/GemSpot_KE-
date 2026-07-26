import React, { createContext, useState } from 'react';
import { reviewService } from '../services/reviewService';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviewsByPlace = async (placeId) => {
    try {
      const data = await reviewService.getReviewsByPlace(placeId);
      setReviews(data.reviews || data);
    } catch (err) {
      console.error("Failed to fetch reviews", err);
    }
  };

  const addReview = async (placeId, reviewData) => {
    try {
      const newReview = await reviewService.createReview(placeId, reviewData);
      setReviews((prev) => [newReview.review || newReview, ...prev]);
    } catch (err) {
      console.error("Failed to submit review", err);
    }
  };

  return (
    <ReviewContext.Provider value={{ reviews, fetchReviewsByPlace, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};