const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const { stripToken, verifyToken } = require('../middleware'); 

const router = express.Router();

// Routes for reviews
router.post('/', stripToken, verifyToken, ReviewController.create); // add middleware to check for token before creating a review
router.get('/', stripToken, verifyToken, ReviewController.getAll); // only logged in users can view all reviews
router.get('/:id', stripToken, verifyToken, ReviewController.getById); // only logged in users can view a review by ID
router.put('/:id', stripToken, verifyToken, ReviewController.update); // only logged in users can update a review
router.delete('/:id', stripToken, verifyToken, ReviewController.delete); // only logged in users can delete a review

module.exports = router;
