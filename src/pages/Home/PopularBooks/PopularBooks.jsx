import { Link } from 'react-router-dom';
import book from '../../../assets/populat.jpg'

const PopularBooks = () => {
    return (
        <div className='my-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-sky-50 font-poppins px-4 md:px-6 lg:px-8'>
            <div className=' flex justify-center items-center'>
                <img src={book} alt="" className='p-4 border'/>
            </div>
            <div className='flex flex-col justify-center items-center lg:items-start gap-6'>
                <h1 className='text-2xl lg:text-3xl font-semibold text-accent leading-tight'>Most Popular Book</h1>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary leading-tight text-center lg:text-start'>7 Habits of Highly Effective Peaple</h1>
                <h3 className='text-xl lg:text-3xl font-semibold text-accent leading-tight'>By Stephen R.Covey</h3>
                <div>
                    <Link to={'https://dream-weavers-library.web.app/book/6548a1b4d68587f1026fb495'} className='btn btn-primary rounded-full normal-case text-base'>More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularBooks;