import './index.css'
import React, {useContext, useEffect, useState} from 'react';
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";


function App() {
    const {fetch} = useContext(BooksContext);

    useEffect(() => {fetch()}, [])

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    );
}

export default App;
