import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';


const BorrowedItem = ({book, borrowedBooks, setBorrowedBooks}) => {
    const {_id, name, image, category, quantity, borrowedDate, returnDate} = book;
    const [availQuantity, setAvailQuantity] = useState(quantity)


    const handleDelete = () => {
        // delete borrowed books
        axios.delete(`http://localhost:5000/borrowed-books?id=${_id}`)
        .then((result) => {
            console.log(result.data)
            if(result.data.deletedCount){
                const remaining = borrowedBooks.filter(book => book._id !== _id)
                setBorrowedBooks(remaining)
                toast.success('Return Successful.')
            }
        }).catch((err) => {
            console.log(err)
        });

        // update available book quantity
        axios.patch(`http://localhost:5000/book?name=${name}`, {quantity: availQuantity + 1})
        .then((result) => {
            console.log(result.data)
            if(result.data.modifiedCount){
                setAvailQuantity(availQuantity + 1)
            }
        }).catch((err) => {
            console.log(err)
        });

    }
    
    
    return (
    <tr>
        <td>
            <div className="flex items-center gap-8">
                <div className="">
                    <div className="w-16">
                        <img src={image} alt="book image" className='w-full h-full'/>
                    </div>
                </div>
                <div className=''>
                    <div className="text-lg font-bold">{name}</div>
                    <div className="font-bold opacity-50">{category}</div>
                </div>
            </div>
        </td>
        <td className='min-w-min w-36'>
            <p className='font-medium'>{borrowedDate}</p>
        </td>
        <td className='min-w-min w-36'>
            <p className='font-medium'>{returnDate}</p>
        </td>
        <td>
            <div className="flex flex-col items-center gap-3">
                <span onClick={handleDelete} className="btn btn-error normal-case text-base">Return</span>
            </div>
        </td>
    </tr>
    );
};

export default BorrowedItem;