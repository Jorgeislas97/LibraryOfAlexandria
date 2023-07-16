const Modal = ({ book, onClose }) => {

    if(!book) return null;
  
    return (
      <div className="modal">
        Title:<h1>{book.title}</h1>
        Author<h2>{book.author}</h2>
        Genre:<h3>{book.genre}</h3>
  
        <button onClick={onClose}>Close</button>
      </div>
    )
  }
  
  export default Modal;