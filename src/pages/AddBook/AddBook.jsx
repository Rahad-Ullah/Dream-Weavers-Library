import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {

    const handleAddBook = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const author_name = form.author.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value);
        const image = form.image.value;
        const rating = parseInt(form.rating.value);
        const description = form.description.value;
        const newBook = {name, author_name, category, quantity, image, rating, description}
        console.log(newBook)

        // send data to the server
        axios.post(`http://localhost:5000/books`, newBook)
        .then((result) => {
            console.log(result.data)
            if(result.data.insertedId){
                toast.success('Added Successfully')
            }
        }).catch((err) => {
            console.log(err)
            toast.error('Failed to Add')
        });
    }
    
    return (
        <div>
        <div className='py-16 px-4 md:px-6 lg:px-8'>
            <div className="max-w-5xl mx-auto px-8 md:px-28 py-16 bg-sky-50 rounded-lg">
            <h2 className="text-3xl text-center font-semibold mb-6 font-poppins text-primary">Add Book</h2>
            <div>
            <form onSubmit={handleAddBook} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter book name"
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
                    className="input input-bordered"
                />
                </div>
                
                {/* Quantity */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input
                    type="number"
                    name="quantity"
                    placeholder="Enter book quantity"
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
                    className="input input-bordered"
                />
                </div>
                {/* Description */}
                <div className="form-control lg:col-span-2">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter book description"
                    className="input input-bordered"
                />
                </div>
                {/* Form Button */}
                <div className="form-control mt-6 lg:col-span-2">
                <button className="btn btn-neutral bg-primary border-2 border-primary  text-white hover:bg-white hover:border-primary hover:text-primary text-base">Add Book</button>
                </div>
            </form>
            </div>
        </div>
        </div>
        <Toaster/>
    </div>
    );
};

export default AddBook;