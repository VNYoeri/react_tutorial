import {ChangeEvent, FormEvent, useState} from "react";
import {Book} from "../domain/Book";

interface BookCreateProps {
    onCreate: (book: Book) => void
}

function BookCreate({onCreate}: BookCreateProps) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const addBook = (event: FormEvent) => {
        event.preventDefault();
        console.log('received event', event);
        onCreate({ title, author });
        setTitle('');
        setAuthor('');
    }


    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('received event', event);
        setTitle(event.target.value);
    }
    const updateAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('received event', event);
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