import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckSession } from '../services/Auth';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await CheckSession();
    const book = formData;
    try {
      const response = await axios.post('http://localhost:3001/Books', book, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBooks(prevState => [
        ...prevState,
        response.data
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>My Library</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book title"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          required
        />
        <button type="submit">Add Book</button>
      </form>
      {books.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default Library;
