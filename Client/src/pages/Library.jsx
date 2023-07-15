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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>

        <input 
          name="title"
          value={form.title}
          onChange={handleChange} 
        />
         <input
          name="author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Books</h2>

      {books.map((book, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <h3>{book.title}</h3>
        </div>
      ))}

    </div>
  );
}

export default Library;
