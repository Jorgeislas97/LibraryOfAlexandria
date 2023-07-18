import React, { useState, useEffect } from 'react';
import Client from '../services/api';
import ReviewForm from '../components/ReviewForm';

const Review = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await Client.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBookClick = (bookId) => {
    setSelectedBookId(bookId);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>Your Library</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3 onClick={() => handleBookClick(book.id)}>{book.title}</h3>
          {selectedBookId === book.id && <ReviewForm bookId={book.id} />}
        </div>
      ))}
    </div>
  );
};

export default Review;
