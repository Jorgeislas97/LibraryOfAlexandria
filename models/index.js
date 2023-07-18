const mongoose = require('mongoose')
const UserSchema = require('./User')
const BookSchema = require('./Book')
const ReviewSchema = require('./Review')


const User = mongoose.model('User', UserSchema)
const Book = mongoose.model('Book', BookSchema)
const Review = mongoose.model('Review', ReviewSchema)


module.exports = {
  User,
  Book,
  Review
}