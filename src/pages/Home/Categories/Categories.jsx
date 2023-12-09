import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://dream-weavers-library-server.vercel.app/categories')
        .then(res => setCategories(res.data))
    } ,[])

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8 font-poppins">
            <h1 className="text-4xl md:text-5xl font-semibold text-accent text-center my-4 mb-16">Our Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;