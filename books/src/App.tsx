import './index.css'
import React, {useState} from 'react';
import {Book} from "./domain/Book";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
    const [books, setBooks] = useState((): Book[] => []);

    const createBook = (book: Book ) => {
        setBooks([...books, book])
    }

    const deleteById = (id: number) => {
        setBooks(books.filter((book) => {return book.id !== id}))
    }

    const editById = (updatedBook: Book) => {
        setBooks(books.map((book) => {
            if(book.id === updatedBook.id) {
                return updatedBook;
            }
            return book;
        }))
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteById} onEdit={editById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;
