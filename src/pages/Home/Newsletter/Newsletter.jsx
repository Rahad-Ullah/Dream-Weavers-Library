
const Newsletter = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-20 pt-8">
            <div className="font-poppins p-6 md:p-10 bg-primary rounded-xl flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-1/2 flex justify-center gap-10">
                <img src="https://images.vexels.com/media/users/3/157518/isolated/preview/c54323942a5b08df8411e33e25680ab3-pile-of-books-vector.png" alt="" className="w-1/5"/>
                <img src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png" alt="" className="w-1/5"/>
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">Subscribe Our Newsletter</h1>
                <div className="form-control">
                <label className="input-group">
                    <input type="text" placeholder="example@gmail.com" className="input input-bordered" />
                    <button className="btn">Subscribe</button>
                </label>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;