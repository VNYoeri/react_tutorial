import './index.css'
import React, {useEffect, useState} from 'react';
import {Book} from "./domain/Book";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios";


function App() {
    const [books, setBooks] = useState((): Book[] => [])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        return response
    }

    useEffect(() => {
        fetchBooks().then(r => setBooks(r.data));
    }, [])

    const createBook = async (book: Book) => {
        const response = await axios.post('http://localhost:3001/books', {...book}).then(b => {
            return b
        })

        setBooks([...books, response.data])
    }

    const deleteById = async (id?: number) => {

        await axios.delete(`http://localhost:3001/books/${id}`)

        setBooks(books.filter((book) => {
            return book.id !== id
        }))
    }

    const editById = async (updatedBook: Book) => {

        const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`,
            {...updatedBook}
        )

        const updatedBooks = books.map((book) => {
            if (book.id === response.data.id) {
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks)
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
