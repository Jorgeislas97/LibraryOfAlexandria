import { useState } from 'react';
import Client from '../services/api'; 

const Library = () => {

  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    author: '',
    title: '',
    genre: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Client.post('/books', form);
    
    setBooks([...books, form]);

    setForm({
      author: '',
      title: '',
      genre: ''
    });
  }

  return (
    <div className="col">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>

        Title:<input 
          name="title"
          value={form.title}
          onChange={handleChange} 
          className="form-input"
        />
         Author:<input
          name="author"
          value={form.author}
          onChange={handleChange}
          className="form-input"
        />

        Genre:<input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="form-button">Submit</button>
      </form>

      <h2>Your Library</h2>

      {books.map((book, index) => (
        <div key={index} className="book-list">
          <h3 className="book-title">{book.title}</h3>
        </div>
      ))}

    </div>
  );
}

export default Library;
