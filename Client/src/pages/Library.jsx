import { useEffect, useState } from 'react';
import { CheckSession } from '../services/Auth';
import Client from '../services/api';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const handleChange = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('/Books',formData)
    console.log('formData')
    setFormData({
      title: '',
      author: '',
      genre: ''
    });
  
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