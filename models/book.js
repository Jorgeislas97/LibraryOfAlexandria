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
  review:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviews',
    Required: true,
  
  }],
}, {
  timestamps: true, 
});

module.exports = BookSchema;
