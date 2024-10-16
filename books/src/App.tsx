import './index.css'
import React, {useEffect} from 'react';
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import useBooksContext from "./hooks/use-books-context";


function App() {
    const {fetch} = useBooksContext();

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    );
}

export default App;
