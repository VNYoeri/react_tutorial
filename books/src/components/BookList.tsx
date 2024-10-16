import BookShow from "./BookShow";
import {useContext} from "react";
import BooksContext from "../context/books";


function BookList() {
    const {books} = useContext(BooksContext)

    const overview = books?.map(b => <BookShow key={b.id} book={b}/>)

    return (
        <div className='book-list'>
            {overview}
        </div>
    )
}

export default BookList