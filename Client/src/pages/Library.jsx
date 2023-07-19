import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Client from '../services/api';
import { DeleteBook, UpdateBook } from "../services/PostServices";

const Library = () => {

  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    author: '', 
    title: '',
    genre: ''
  });

  const fetchBooks = async () => {
    const response = await Client.get('/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Client.post('/books', form);

    fetchBooks();

    setForm({
      author: '',
      title: '',
      genre: ''
    });
  }

  // Add deleteBook function
  const deleteBook = async (id) => {
    await Client.delete(`/books/${id}`);
    fetchBooks();
  }

  return (
    <div className="container">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange} 
          placeholder="Title"
        />

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author" 
        />

        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Genre" 
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Your Library</h2>

      {books.map(book => (
  <div key={book.id}>
    <h3>
      <Link to={`/books/${book._id}/details`}>{book.title}</Link>
    </h3>
    <button onClick={() => deleteBook(book._id)}>Delete</button> {/* Add Delete button for each book */}
  </div>
))}
    </div>
  );
}

export default Library;
