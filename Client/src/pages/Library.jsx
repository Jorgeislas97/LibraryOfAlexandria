import { useState, useEffect } from 'react';
import Client from '../services/api';
import Modal from '../components/Modal';

const Library = () => {

  const [books, setBooks] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

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
        <h3 key={book.id} onClick={() => {
          setOpenModal(true);
          setSelectedBook(book);
        }}>
          {book.title}
        </h3>
      ))}
      
      {openModal && (
        <Modal 
          book={selectedBook}
          onClose={() => setOpenModal(false)}
        />
      )}

    </div>
  );
}

export default Library;