import { createContext, useState } from "react";

export const BookContext = createContext()

export const BooksProvider = props => {
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

    const handleDelete = id => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks)
    }

    return (
        <BookContext.Provider value={[books, setBooks]} handleDelete={handleDelete}>
            {props.children}
        </BookContext.Provider>
    )
}