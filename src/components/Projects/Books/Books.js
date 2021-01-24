import { useState } from "react";
import BooksList from "./BooksList";
import './Books.css'
const Books = () => {

    const [books, setBooks] = useState([
        {
            title: 'Floating Gold In the River',
            author: 'Ardian',
            id: 1001
        },
        {
            title: 'How to Find Girlslien in Mars',
            author: 'Ansyah',
            id: 1002
        },
        {
            title: 'Best Video in 19 Second',
            author: 'Gosong Anehya',
            id: 1003
        },
        {
            title: 'Creativity In the Toilet',
            author: 'Kuso',
            id: 1004
        }
    ])

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const addTitle = e => {
        setTitle(e.target.value)
    }

    const addAuthor = e => {
        setAuthor(e.target.value)
    }

    const addBook = e => {
        e.preventDefault()
        setBooks(prevBooks=>[...prevBooks, {title: title, author: author}])
    }

    const handleDelete = (id) => {
        const newBooks = books.filter(book => book.id !== id)
        setBooks(newBooks)
    }

    return (
        <div className='books'>
            <BooksList books={books}
            handleDelete={handleDelete}
            title={title}
            author={author}
            addTitle={addTitle}
            addAuthor={addAuthor}
            addBook={addBook}/>
        </div>
    );
}

export default Books; 