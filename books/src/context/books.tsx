import {createContext, ReactNode, useCallback, useState} from "react";
import {Book} from "../domain/Book";
import axios from "axios";

const BooksContext = createContext<BooksContextType>({
    books: [],
    create(): void {
    },
    edit(): void {
    },
    fetch(): void {
    },
    remove(): void {
    }
})

interface BooksContextType {
    books: Book[],

    remove(book: Book): void,

    edit(book: Book): void,

    create(book: Book): void,

    fetch(): void,
}

interface ProviderProps {
    children: ReactNode
}

function Provider({children}: ProviderProps) {
    const [books, setBooks] = useState((): Book[] => [])

    const fetch = async () => {
        await axios.get('http://localhost:3001/books').then(response => setBooks(response.data))
    }

    const create = async (book: Book) => {
        const response = await axios.post('http://localhost:3001/books', {...book}).then(b => {
            return b
        })

        setBooks([...books, response.data])
    }

    const remove = async (book: Book) => {

        await axios.delete(`http://localhost:3001/books/${book.id}`)

        setBooks(books.filter((b) => {
            return b.id !== book.id
        }))
    }

    const edit = async (updatedBook: Book) => {

        const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`,
            {...updatedBook}
        )

        const updatedBooks = books.map((book) => {
            if (book.id === response.data.id) {
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks)
    }



    return (
        <BooksContext.Provider value={{
            books,
            remove,
            edit,
            create,
            fetch: useCallback(fetch, [])
        }}>
            {children}
        </BooksContext.Provider>
    )
}


export {Provider};
export default BooksContext;
