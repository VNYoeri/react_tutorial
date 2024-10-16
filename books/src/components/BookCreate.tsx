import {ChangeEvent, FormEvent, useState} from "react";
import useBooksContext from "../hooks/use-books-context";


function BookCreate() {
    const {create} = useBooksContext();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const addBook = (event: FormEvent) => {
        event.preventDefault();
        create({title, author});
        setTitle('');
        setAuthor('');
    }


    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const updateAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    return (
        <div className='book-create'>
            <h3>Create a new book</h3>
            <form onSubmit={addBook}>
                <input id='title' className='input' type="text" value={title} placeholder="Title goes here" onChange={updateTitle}/>
                <input id='author' className='input' type="text" value={author} placeholder="Author goes here" onChange={updateAuthor}/>
                <button className='button' type='submit'>Create book</button>
            </form>
        </div>
    )
}

export default BookCreate