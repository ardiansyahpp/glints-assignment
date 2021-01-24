import './Books.css'

const BooksList = ({books, handleDelete, title, author, addTitle, addAuthor, addBook}) => {
    return (
        <div>
            <form onSubmit={addBook} className='books-form'>
            <input type="text" name='title' value={title} placeholder='Book Title' onChange={addTitle} className='books-input' required/>
            <input type="text" name="author" value={author} placeholder='Book Author' onChange={addAuthor} className='books-input' required/>
            <button className='books-addbtn'>Add Book</button>
            </form>

            <div className="books-list">
            {books.map((book) => (
                <div className="books-preview" key={book.id}>
                    <h2>{ book.title }</h2>
                    <p>Written by {book.author}</p>
                    <button onClick={()=>handleDelete(book.id)}>Delete This Book</button>
                </div>
            ))}
            </div>

        </div>
    );
}

export default BooksList;