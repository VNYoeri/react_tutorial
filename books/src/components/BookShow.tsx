import {Book} from "../domain/Book";
import {useState} from "react";
import BookEdit from "./BookEdit";

interface BookShowProps {
    book: Book,
    onDelete: ((id?: number) => void)
    onEdit: (book: Book) => void
}

function BookShow({book, onDelete, onEdit}: BookShowProps) {
    const [showEdit, toggleEdit] = useState(false);


    const deleteBook = () => {
        onDelete(book?.id)
    }

    const updateBook = (book: Book) => {
        toggleEdit(!showEdit)
        onEdit(book)
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
                <button className='delete' onClick={deleteBook}/>
                <button className='edit' onClick={editBook}/>
            </div>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}/>
            {content}
            Author: {book?.author}
        </div>
    )
}

export default BookShow