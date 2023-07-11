const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  reviewComment: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
