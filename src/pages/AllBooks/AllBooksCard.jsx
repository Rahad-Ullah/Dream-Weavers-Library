import { Link } from "react-router-dom";
import { Rating } from 'primereact/rating';

const AllBooksCard = ({book}) => {
    const {_id, name, author_name, image, category, rating} = book;

    return (
        <div className="flex flex-col p-6 border rounded hover:shadow-2xl transition">
            <figure className="mb-5 flex justify-center items-center p-8 bg-amber-50 rounded">
                <img src={image} alt="book" className="h-60 object-cover rounded-sm"/>
            </figure>
            <div className="flex flex-col justify-between flex-1">
                <div className="space-y-1">
                    <h1 className="text-lg font-semibold text-accent">{name}</h1>
                    <h2 className="font-medium">Author: {author_name}</h2>
                    <p className="">Category: {category}</p>
                    <Rating value={rating} readOnly cancel={false} className="text-amber-500 text-2xl flex gap-1"/>
                </div>
                <div>
                    <Link to={`/update/${_id}`} className="btn btn-secondary w-full mt-4 normal-case text-base">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default AllBooksCard;