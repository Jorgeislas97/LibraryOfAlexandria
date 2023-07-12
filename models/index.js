const mongoose = require('mongoose')
const UserSchema = require('./User')
const BookSchema = require('./Book')

const User = mongoose.model('User', UserSchema)
const Book = mongoose.model('Book', BookSchema)

module.exports = {
  User,
  Book
}