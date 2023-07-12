const { Review, Book, User } = require('../models');

const ReviewController = {
    
  // Create a new review
  create: async (req, res) => {
    try {
      const { book, user, rating, reviewComment } = req.body;
      
      // Check if a review by the same user for this book already exists
      const existingReview = await Review.findOne({ book, user });
      if (existingReview) {
        return res.status(400).json({ error: 'User has already reviewed this book.' });
      }

      const review = new Review({ book, user, rating, reviewComment });
      await review.save();

      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

// Get all reviews
getAll: async (req, res) => {
    try {
      const reviews = await Review.find().populate('book user');
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a review by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findById(id).populate('book user');
      if (!review) throw Error('Review not found');
      res.status(200).json(review);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  // Update a review by ID
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findByIdAndUpdate(id, req.body, { new: true });
      if (!review) throw Error('Review not found');
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a review by ID
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Review.findByIdAndDelete(id);
      if (!deleted) throw Error('Review not found');
      res.status(200).json(deleted);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = ReviewController;