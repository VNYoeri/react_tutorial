import {Book} from "../domain/Book";
import BookShow from "./BookShow";

interface BookListProps {
    books: Book[],
    onDelete: (id ?: number) => void,
    onEdit: (book: Book) => void
}

function BookList({books, onDelete, onEdit}: BookListProps) {
    const overview = books?.map(b => <BookShow onEdit={onEdit} key={b.id} book={b} onDelete={onDelete}/>)

    return (
        <div className='book-list'>
            {overview}
        </div>
    )
}

export default BookList