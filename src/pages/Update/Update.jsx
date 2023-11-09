import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const book = useLoaderData()
    const {_id, name, author_name, image, rating, category} = book;

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const author_name = form.author.value;
        const category = form.category.value;
        const image = form.image.value;
        const rating = parseInt(form.rating.value);
        const updatedBook = {name, author_name, category, image, rating}

        // send data to the server
        axios.patch(`http://localhost:5000/avail-books?id=${_id}`, updatedBook)
        .then((result) => {
            console.log(result.data)
            if(result.data.modifiedCount){
                toast.success('Update Successful')
            }
            else{
                toast.success('No Change')
            }
        }).catch((err) => {
            console.log(err)
            toast.success('Update Failed')
        });
    }
    
    return (
    <div>
        <div className='max-w-4xl mx-auto py-16'>
            <div className="px-8 md:px-28 py-16 bg-amber-50">
            <h2 className="text-3xl text-center font-semibold mb-6 font-poppins text-secondary">Update Book</h2>
            <div>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-6">
                {/* Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter book name"
                    defaultValue={name}
                    className="input input-bordered"
                />
                </div>
                {/* Author Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Author</span>
                </label>
                <input
                    type="text"
                    name="author"
                    placeholder="Enter author name"
                    defaultValue={author_name}
                    className="input input-bordered"
                />
                </div>
                {/* Category */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select 
                    name="category" 
                    placeholder="Enter book category"
                    className="input input-bordered"
                    defaultValue={category}
                >
                    <option value="History">History</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Travel">Travel</option>
                </select>
                </div>

                {/* Rating */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input
                    type="number"
                    name="rating"
                    placeholder="Enter book rating"
                    defaultValue={rating}
                    className="input input-bordered"
                />
                </div>
                {/* Image */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input
                    type="text"
                    name="image"
                    placeholder="Enter book image URL"
                    defaultValue={image}
                    className="input input-bordered"
                />
                </div>
                {/* Form Button */}
                <div className="form-control mt-6">
                <button className="btn btn-secondary hover:bg-white hover:text-amber-500 border-2 text-base">Update Book</button>
                </div>
            </form>
            </div>
        </div>
        </div>
        <Toaster/>
    </div>
    );
};

export default Update;