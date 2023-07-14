const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { stripToken, verifyToken } = require('../middleware'); 

// Route to get all books
router.get('/Books', stripToken, verifyToken, BookController.getAll);

// Route to get a book by id
router.get('/Books/:id', stripToken, verifyToken, BookController.getById);

// Route to create a new book
router.post('/Books', stripToken, verifyToken, BookController.create);

// Route to update a book
router.put('/Books/:id', stripToken, verifyToken, BookController.update);

// Route to delete a book
router.delete('/Books/:id', stripToken, verifyToken, BookController.delete);

module.exports = router;
