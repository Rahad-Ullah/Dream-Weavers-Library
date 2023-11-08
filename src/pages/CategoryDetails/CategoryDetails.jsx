import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const CategoryDetails = () => {
    const books = useLoaderData()
    const category = useParams().category
    
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8 font-poppins">
            <h1 className="text-4xl md:text-5xl font-semibold text-accent text-center my-4 mb-16">Books on {category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <DetailsCard
                    key={book._id}
                    book={book}
                    ></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;