import {Book} from "../domain/Book";
import {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

interface BookShowProps {
    book: Book
}

function BookShow({book}: BookShowProps) {
    const [showEdit, toggleEdit] = useState(false);
    const {remove} = useBooksContext();

    const removeBook = () => {
        remove(book)
    }

    const toggleEditingMode = () => {
        toggleEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={toggleEditingMode}/>
    }

    return (
        <div className='book-show'>
            <div className='actions'>
                <button className='delete' onClick={removeBook}/>
                <button className='edit' onClick={toggleEditingMode}/>
            </div>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}/>
            {content}
            <i>{book?.author}</i>
        </div>
    )
}

export default BookShow