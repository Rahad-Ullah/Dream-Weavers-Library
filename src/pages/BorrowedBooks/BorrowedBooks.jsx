import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BorrowedItem from "./BorrowedItem";
import { Toaster } from "react-hot-toast";

const BorrowedBooks = () => {
    const {user, loading} = useAuth()
    const email = user.email;
    const [borrowedBooks, setBorrowedBooks] = useState([])

    useEffect(() => {
        axios.get(`https://dream-weavers-library-server.vercel.app/borrowed-books?email=${email}`)
        .then(res => setBorrowedBooks(res.data))
    },[email])

    return (
        <div className="font-poppins">
            {
                loading && 
                <div className="h-[80vh] flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg text-primary
                    "></span>
                </div>
            }
            <div className="bg-base-100 px-4 md:px-6 lg:px-8 py-6">
            <div className="max-w-6xl mx-auto ">
                <div className="bg-base-100 p-10 rounded-2xl">
                    <header className="flex justify-between items-center pb-8 border-b">
                        <h1 className="text-2xl font-bold">Borrowed Books</h1>
                        <h3 className="text-lg font-semibold">{borrowedBooks.length} Items</h3>
                    </header>
                    <div className="overflow-x-auto w-full">
                        <table className="table p-0">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className="">Borrow Date</th>
                                    <th className="">Return Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* rows */}
                            {
                                borrowedBooks.length > 0
                                ?
                                borrowedBooks.map(book => <BorrowedItem 
                                    key={book._id}
                                    book={book}
                                    borrowedBooks={borrowedBooks}
                                    setBorrowedBooks={setBorrowedBooks}
                                    ></BorrowedItem>)
                                :
                                <tr>
                                    <td className="text-2xl font-semibold text-center opacity-50 py-8">No book added</td>
                                </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
            
        </div>
    );
};

export default BorrowedBooks;