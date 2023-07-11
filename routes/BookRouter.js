const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController'); 
// Route to get all books
router.get('/Books', BookController.getAll);

// Route to get a book by id
router.get('/Books/:id', BookController.getById);

// Route to create a new book
router.post('/Books', BookController.create);

// Route to update a book
router.put('/Books/:id', BookController.update);

// Route to delete a book
router.delete('/Books/:id', BookController.delete);

module.exports = router;
