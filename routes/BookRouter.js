const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { stripToken, verifyToken } = require('../middleware'); 

// Route to get all books
///router.get( stripToken, verifyToken, BookController.getAll);

// Route to get a book by id
//router.get('/:id', stripToken, verifyToken, BookController.getById);

// Route to create a new book
router.post( '/', stripToken, verifyToken, BookController.createBook);

// Route to update a book
//router.put('/:id', stripToken, verifyToken, BookController.update);

// Route to delete a book
//router.delete( '/', stripToken, verifyToken, BookController.delete);

module.exports = router;