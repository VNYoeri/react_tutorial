import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";


function BookList() {
    const {books} = useBooksContext();

    const overview = books?.map(book => <BookShow key={book.id} book={book}/>);

    return (
        <div className='book-list'>
            {overview}
        </div>
    )
}

export default BookList