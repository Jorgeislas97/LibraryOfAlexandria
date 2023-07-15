const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const { stripToken, verifyToken } = require('../middleware'); 

const router = express.Router();

// Routes for reviews
router.post('/', stripToken, verifyToken, ReviewController.CreateReview); // add middleware to check for token before creating a review
router.get('/', stripToken, verifyToken, ReviewController.GetReviews); // only logged in users can view all reviews
router.get('/:id', stripToken, verifyToken, ReviewController.GetReviewById); // only logged in users can view a review by ID
router.put('/:id', stripToken, verifyToken, ReviewController.UpdateReview); // only logged in users can update a review
router.delete('/:id', stripToken, verifyToken, ReviewController.DeleteReview); // only logged in users can delete a review

module.exports = router;
