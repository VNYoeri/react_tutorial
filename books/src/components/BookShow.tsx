import {Book} from "../domain/Book";
import {useContext, useState} from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

interface BookShowProps {
    book: Book
}

function BookShow({book}: BookShowProps) {
    const [showEdit, toggleEdit] = useState(false);
    const {remove, edit} = useContext(BooksContext)

    const removeBook = () => {
        remove(book)
    }

    const updateBook = (book: Book) => {
        toggleEdit(!showEdit)
        edit(book)
    }

    const editBook = () => {
        toggleEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={updateBook}/>
    }

    return (
        <div className='book-show'>
            <div className='actions'>
                <button className='delete' onClick={removeBook}/>
                <button className='edit' onClick={editBook}/>
            </div>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}/>
            {content}
            Author: {book?.author}
        </div>
    )
}

export default BookShow