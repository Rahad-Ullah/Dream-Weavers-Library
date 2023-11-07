import { Link } from 'react-router-dom';
import error_404 from '../../assets/Error_404.gif'
import Navbar from '../shared/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-4 max-w-7xl mx-auto py-10 px-4 md:px-6 lg:px-8 font-poppins'>
                <div className=' lg:w-1/2 text-accent'>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-6'>So Sorry!</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold leading-tight mb-7'>The page you are looking for cannot be found</h2>
                    <h4 className='text-xl font-bold mb-3'>Possible Reasons</h4>
                    <ol className='list-disc list-inside space-y-2'>
                        <li>The address may have been typed incorrectly.</li>
                        <li>It may be a broken or outdated link.</li>
                    </ol>
                    <div className='flex justify-center lg:justify-start'>
                        <Link className='btn btn-secondary normal-case text-base mt-8'>Go Home</Link>
                    </div>
                </div>
                <div className='w-10/12 md:w-6/12'>
                    <img src={error_404} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Error;