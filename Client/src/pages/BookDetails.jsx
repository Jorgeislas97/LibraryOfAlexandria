import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';


const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      try {
        const response = await Client.get(`/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]); 

  

  if (book === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      
    </div>
  );
};

export default BookDetail;