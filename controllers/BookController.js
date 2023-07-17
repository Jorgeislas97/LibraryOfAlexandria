const {Book} = require('../models');

const CreateBook = async  (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.send(book)
  } catch (error) {
    throw error 
    
  }
}
const UpdateBook = async (req,res) => {
  try {
      const book = await Book.findByIdAndUpdate(req.params.book_id, req.body, {new: true})
      res.send(book)
  } catch (error) {
      throw error
  }
}
const GetBooks = async (req,res) => {
  try {
      const books = await Book.find({})
      res.send(books)
  } catch (error) {
      throw error
  }
}
const GetBookById = async (req,res) => {
  try {
      const book = await Book.findById(req.params.id)
      res.send(book)
  } catch (error) {
      throw error
  }
}
const DeleteBook = async (req,res) => {
  console.log("we hit the delete book cont")
  try {
      await Book.deleteOne({_id: req.params.id})
      res.send({msg: 'Book has been deleted', payload: req.params.book_id, status: 'OK'})
  } catch (error) {
      throw error
  }
}

module.exports = {
  CreateBook,
  UpdateBook,
  GetBooks,
  GetBookById,
  DeleteBook

}