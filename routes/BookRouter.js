const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { stripToken, verifyToken } = require('../middleware'); 

// Route to get all books
router.get('/', stripToken, verifyToken, BookController.GetBooks);

// Route to get a book by id
router.get('/:id', stripToken, verifyToken, BookController.GetBookById);

// Route to create a new book
router.post( '/', stripToken, verifyToken, BookController.CreateBook);

// Route to update a book
router.put('/:id', stripToken, verifyToken, BookController.UpdateBook);

// Route to delete a book
router.delete( '/', stripToken, verifyToken, BookController.DeleteBook);

module.exports = router;