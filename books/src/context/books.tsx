import {createContext, ReactNode, useEffect, useState} from "react";
import {Book} from "../domain/Book";
import axios from "axios";

const BooksContext = createContext<BooksContextType>({
    books: [],
    onDelete(): void {
    },
    onEdit(): void {
    },
    onCreate(): void {
    },
    fetchBooks(): void {
    }
})

interface BooksContextType {
    books: Book[],
    onDelete: (id: number) => void,
    onEdit: (book: Book) => void,
    onCreate: (book: Book) => void,
    fetchBooks: () => void
}

interface ProviderProps {
    children: ReactNode
}

function Provider({children}: ProviderProps) {
    const [books, setBooks] = useState((): Book[] => [])

    const fetchBooks = async () => {
        await axios.get('http://localhost:3001/books').then(response => setBooks(response.data))
    }

    const createBook = async (book: Book) => {
        const response = await axios.post('http://localhost:3001/books', {...book}).then(b => {
            return b
        })

        setBooks([...books, response.data])
    }

    const deleteById = async (id?: number) => {

        await axios.delete(`http://localhost:3001/books/${id}`)

        setBooks(books.filter((book) => {
            return book.id !== id
        }))
    }

    const editById = async (updatedBook: Book) => {

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

    const defaultBooks: BooksContextType = {
        books: books,
        onDelete: (id: number) =>{
            return deleteById(id)
        },
        onEdit: (book) => {
            return editById(book)
        },
        onCreate: (book: Book) => {
            return createBook(book)
        },
        fetchBooks: () => {
            return fetchBooks()
        }
    };

    return (
        <BooksContext.Provider value={defaultBooks}>
            {children}
        </BooksContext.Provider>
    )
}


export {Provider};
export default BooksContext;
