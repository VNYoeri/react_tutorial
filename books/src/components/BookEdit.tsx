import {Book} from "../domain/Book";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import BooksContext from "../context/books";

interface BookEditProps {
    book: Book,
    onSubmit: () => void
}

function BookEdit({book, onSubmit}: BookEditProps) {
    const [title, setTitle] = useState(book.title);
    const { edit } = useContext(BooksContext)

    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)

    }

    const saveChanges = (event: FormEvent) => {
        event.preventDefault();
        edit({...book, title})
        onSubmit()
    }

    return (
        <form className='book-edit' onSubmit={saveChanges}>
            <h3>Title</h3>
            <input className='input' type="text" value={title} placeholder="Title goes here" onChange={updateTitle}/>
            <button className='button is-primary' type='submit'>Save</button>
        </form>
    )
}

export default BookEdit