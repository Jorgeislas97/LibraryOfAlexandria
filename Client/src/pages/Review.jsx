import { useState, useEffect } from 'react';
import Client from '../services/api';

const Review = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await Client.get('/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <div className="container">
      <h2>Your Library</h2>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          
        </div>
      ))}
    </div>
  );
}

export default Review;
