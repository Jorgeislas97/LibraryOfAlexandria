import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: '',
    author: '',
    genre: ''
  });
  const [reviewForm, setReviewForm] = useState({
    reviewComment: '',
    rating: ''
  });

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      try {
        const response = await Client.get(`/books/${id}`);
        const bookDetails = response.data;

        const reviews = await Promise.all(
          bookDetails.review.map(reviewId => Client.get(`/reviews/${reviewId}`))
        );
        
        const reviewData = reviews.map(response => response.data);
        setBook({ ...bookDetails, review: reviewData });
        setEditForm({
          title: bookDetails.title,
          author: bookDetails.author,
          genre: bookDetails.genre,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await Client.put(`/books/${id}`, editForm);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleReviewChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value
    });
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Client.post(`/reviews`, {
        ...reviewForm,
        bookId: id
      });

      if (response.status === 200) {
        setBook({ 
          ...book,
          review: [...book.review, response.data] 
        });

        setReviewForm({
          reviewComment: '',
          rating: ''
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (book === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            name="title"
            value={editForm.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <input
            name="author"
            value={editForm.author}
            onChange={handleChange}
            placeholder="Author"
          />

          <input
            name="genre"
            value={editForm.genre}
            onChange={handleChange}
            placeholder="Genre"
          />

          <button type="submit">Submit</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <p>Title: {book?.title}</p>
          <p>Author: {book?.author}</p>
          <p>Genre: {book?.genre}</p>
          <h3>Reviews:</h3>
          {book?.review.map(review => (
            <div key={review._id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.reviewComment}</p>
            </div>
          ))}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      
      <h2>Write a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <input
          name="reviewComment"
          value={reviewForm.reviewComment}
          onChange={handleReviewChange}
          placeholder="Your Review"
        />

        <input
          name="rating"
          value={reviewForm.rating}
          onChange={handleReviewChange}
          placeholder="1"
          type="number"
          min="1"
          max="5"
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default BookDetail;
