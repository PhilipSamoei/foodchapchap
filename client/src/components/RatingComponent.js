import React, { useState } from 'react';

function RatingComponent({ restaurantId, currentRating, onRatingChange }) {
  const [rating, setRating] = useState(currentRating || 0);

  const handleStarClick = newRating => {
    setRating(newRating);
    onRatingChange(restaurantId, newRating);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingComponent;
