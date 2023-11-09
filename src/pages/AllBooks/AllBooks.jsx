import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";
import { useState } from "react";

const AllBooks = () => {
    const allBooks = useLoaderData()
    const [books, setBooks] = useState(allBooks)

    const availBooks = allBooks.filter(book => book.quantity > 0)
    
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8 font-poppins">
            <div className="flex justify-center items-center gap-6 mb-16">
                <button onClick={() => setBooks(allBooks)} className="btn btn-primary normal-case text-base">All Books</button>
                <button onClick={() => setBooks(availBooks)} className="btn btn-secondary normal-case text-base">Available Books</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <AllBooksCard
                        key={book._id}
                        book={book}
                    ></AllBooksCard>)
                }
            </div>
        </div>
        );
};

export default AllBooks;