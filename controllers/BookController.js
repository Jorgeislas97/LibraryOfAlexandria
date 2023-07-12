const Book = require('../models/book');



const BookController = {
  // Create a new book
  create: async (req, res) => {
    console.log(req.body)
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all books
  getAll: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a book by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      if (!book) throw Error('Book not found');
      res.status(200).json(book);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  // Update a book by ID
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
      if (!book) throw Error('Book not found');
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a book by ID
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Book.findByIdAndDelete(id);
      if (!deleted) throw Error('Book not found');
      res.status(200).json(deleted);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = BookController;
