import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    return (
        <Link className="p-6 border rounded-2xl hover:border-primary hover:shadow-2xl transition transform hover:scale-105">
            <div className="h-[80%] mb-5">
                <img src={category?.image} alt="category" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <h1 className="text-2xl text-center font-semibold text-accent">{category?.category}</h1>
        </Link>
    );
};

export default CategoryCard;