const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const { stripToken, verifyToken } = require('../middleware'); 

const router = express.Router();


router.post('/', stripToken, verifyToken, ReviewController.CreateReview); 
router.get('/', stripToken, verifyToken, ReviewController.GetReviews); 
router.get('/:id', stripToken, verifyToken, ReviewController.GetReviewById); 
router.put('/:id', stripToken, verifyToken, ReviewController.UpdateReview); 
router.delete('/:id', stripToken, verifyToken, ReviewController.DeleteReview); 

module.exports = router;
