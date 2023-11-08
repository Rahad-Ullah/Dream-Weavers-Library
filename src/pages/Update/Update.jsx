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
        const rating = form.rating.value;
        const updatedBook = {name, author_name, category, image, rating}

        // send data to the server
        axios.patch(`http://localhost:5000/avail-books?id=${_id}`, updatedBook)
        .then((result) => {
            console.log(result.data)
            if(result.data.modifiedCount){
                toast.success('Update Successful')
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    
    return (
    <div>
        <div className='max-w-4xl mx-auto py-16'>
            <div className="px-8 md:px-28 py-16 bg-sky-50">
            <h2 className="text-3xl text-center font-semibold mb-6 font-poppins text-[#374151]">Update Book</h2>
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
                {/* Brand Name */}
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
                {/* Type */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <input
                    type="text"
                    name="category"
                    placeholder="Enter book category"
                    defaultValue={category}
                    className="input input-bordered"
                />
                </div>

                {/* Rating */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input
                    type="text"
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
                <button className="btn btn-neutral bg-primary border-2 border-primary  text-white hover:bg-white hover:border-primary hover:text-primary text-base">Update Book</button>
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