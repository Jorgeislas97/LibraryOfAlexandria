import { DeleteBook } from "../services/PostServices";

const Modal = ({ book, onClose, fetchBooks }) => {

const deleteBook = async() => {
  await DeleteBook (book._id)
  fetchBooks()
  onClose()
  
}
  



if(!book) return null;

  return (
    <div className="modal">
      Title:<h1>{book.title}</h1>
      Author<h2>{book.author}</h2>
      Genre:<h3>{book.genre}</h3>
      <button onClick={deleteBook}>Delete</button>

      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal;