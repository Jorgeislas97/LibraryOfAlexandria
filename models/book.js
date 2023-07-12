const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
author: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, 
});

module.exports = BookSchema;
