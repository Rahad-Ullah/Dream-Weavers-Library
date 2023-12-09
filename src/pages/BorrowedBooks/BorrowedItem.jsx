import axios from 'axios';
import toast from 'react-hot-toast';


const BorrowedItem = ({book, borrowedBooks, setBorrowedBooks}) => {
    const {_id, name, image, category, quantity, borrowedDate, returnDate} = book;


    const handleDelete = () => {
        // delete borrowed books
        axios.delete(`https://dream-weavers-library-server.vercel.app/borrowed-books?id=${_id}`)
        .then((result) => {
            console.log(result.data)
            if(result.data.deletedCount){
                const remaining = borrowedBooks.filter(book => book._id !== _id)
                setBorrowedBooks(remaining)
                toast.success('Return Successful.')
            }
        }).catch((err) => {
            console.log(err)
            toast.error('Failed to return.')
        });

        // update available book quantity
        axios.patch(`https://dream-weavers-library-server.vercel.app/book?name=${name}`, {quantity: quantity + 1})
        .then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err)
            toast.error('Failed to update quantity.')
        });

    }
    
    
    return (
    <tr>
        <td>
            <div className="flex items-center gap-4 md:gap-8">
                <div className="">
                    <div className="w-12 md:w-16">
                        <img src={image} alt="book image" className='w-full h-full'/>
                    </div>
                </div>
                <div className=''>
                    <div className="text-base lg:text-lg font-semibold">{name}</div>
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
                <span onClick={handleDelete} className="btn btn-sm md:btn-md btn-error normal-case text-base">Return</span>
            </div>
        </td>
    </tr>
    );
};

export default BorrowedItem;