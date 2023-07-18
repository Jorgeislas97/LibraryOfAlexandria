const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { stripToken, verifyToken } = require('../middleware'); 

router.get('/', stripToken, verifyToken, BookController.GetBooks);
router.get('/:id', stripToken, verifyToken, BookController.GetBookById);
router.post( '/', stripToken, verifyToken, BookController.CreateBook);
router.put('/:id', stripToken, verifyToken, BookController.UpdateBook);
router.delete( '/:id', stripToken, verifyToken, BookController.DeleteBook);

module.exports = router;