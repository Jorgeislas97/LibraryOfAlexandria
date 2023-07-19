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

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      try {
        const response = await Client.get(`/books/${id}`);
        setBook(response.data);
        setEditForm({
          title: response.data.title,
          author: response.data.author,
          genre: response.data.genre,
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
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default BookDetail;
