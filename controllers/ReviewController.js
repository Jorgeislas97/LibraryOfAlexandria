const {Book} = require('../models');
const { Review } = require('../models');

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    const book = await Book.findById(req.body.bookId);
    book.review.push(review._id);
    await book.save();
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.review_id, req.body, { new: true });
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};

const GetReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const DeleteReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.review_id });
    res.send({ msg: 'Review has been deleted', payload: req.params.review_id, status: 'OK' });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateReview,
  UpdateReview,
  GetReviews,
  GetReviewById,
  DeleteReview
};
