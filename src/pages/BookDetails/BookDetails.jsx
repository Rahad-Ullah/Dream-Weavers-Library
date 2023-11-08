import { Link, useLoaderData } from "react-router-dom";
import { Rating } from 'primereact/rating';


const BookDetails = () => {
    const book = useLoaderData()
    const {name, author_name, image, category, rating, quantity} = book;
    
    return (
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8 font-poppins">
            <div className="w-full lg:w-1/4 flex justify-center">
                <img src={image} alt="" className="w-1/2 lg:w-full"/>
            </div>
            <div className="space-y-2 flex-1">
                <h1 className="text-3xl font-semibold text-accent">{name}</h1>
                <h2 className="text-xl font-medium">Author: {author_name}</h2>
                <p className="font-medium">Category: {category}</p>
                <Rating value={rating} readOnly cancel={false} className="text-amber-500 text-2xl flex gap-1"/>
                <div className="py-8">
                    <span className={`font-medium text-lg p-4 px-5 border-2 ${quantity > 0 ? 'border-success' : 'border-error'}`}>{quantity} Copy Available</span>
                </div>
                <div className="flex gap-6 pt-4">
                    <Link className="btn btn-primary normal-case text-base btn-outline">Read More</Link>
                    <Link className="btn btn-primary normal-case text-base">Borrow</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;