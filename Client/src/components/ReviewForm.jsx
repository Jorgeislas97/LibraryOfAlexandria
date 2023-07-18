import React, { useState } from 'react';

const ReviewForm = ({ bookId, onSubmit }) => {
  const [rating, setRating] = useState(1);
  const [reviewComment, setReviewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      book: bookId,
      rating,
      reviewComment,
    };
    onSubmit(review);
    setRating(1);
    setReviewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <label>
        Comment:
        <textarea
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
        ></textarea>
      </label>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
