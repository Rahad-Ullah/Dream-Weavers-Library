import { Link, useLoaderData } from "react-router-dom";
import { Rating } from 'primereact/rating';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
        

const BookDetails = () => {
    const book = useLoaderData()
    const {_id, name, author_name, image, category, rating, quantity} = book;
    const {user} = useAuth()
    const [availQuantity, setAvailQuantity] = useState(quantity)
    const [loggedUser, setLoggedUser] = useState({})

    useEffect( () => {
        if(user){
            axios.get(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => {
                setLoggedUser(res.data)
            })
        }
    },[user])

    const handleBorrow = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const returnDate = form.return_date.value;
        const today = new Date()
        const borrowedDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const borrowOrder = {
            userName,
            email,
            name,
            image,
            category,
            quantity,
            borrowedDate,
            returnDate
        }
        
        if(availQuantity < 1){
            toast.error('No book available now.')
            return;
        }
        // decrease available book quantity
        axios.patch(`http://localhost:5000/books?id=${_id}&name=${name}&email=${email}`, {quantity: availQuantity - 1})
        .then((result) => {
            console.log(result.data)
            if(result.data.modifiedCount){
                setAvailQuantity(availQuantity - 1)
            }
        }).catch((err) => {
            console.log(err)
        });
        
        // insert to borrowed collection
        axios.post(`http://localhost:5000/borrowed-books`, borrowOrder)
        .then((result) => {
            console.log(result.data)
            if(result.data.insertedId){
                toast.success('Added to borrowed list.')
            }
        }).catch((err) => {
            console.log(err)
            toast.error('Already is added to borrowed list.')
        });
    }
    

    return (
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8 font-poppins">
            <div className="w-full lg:w-1/4 flex justify-center">
                <img src={image} alt="" className="w-1/2 lg:w-full"/>
            </div>
            <div className="space-y-2 flex-1">
                <h1 className="text-2xl md:text-3xl font-semibold text-accent">{name}</h1>
                <h2 className="text-lg md:text-xl font-medium">Author: {author_name}</h2>
                <p className="font-medium">Category: {category}</p>
                <Rating value={rating} readOnly cancel={false} className="text-amber-500 text-2xl flex gap-1"/>
                <div className="py-8">
                    <span className={`font-medium text-lg p-4 px-5 border-2 ${availQuantity > 0 ? 'border-success' : 'border-error'}`}>{availQuantity} Copy Available</span>
                </div>
                <div className="flex gap-6 pt-4">
                    <Link to={`/pdf-view/${_id}`} className="btn btn-primary normal-case text-base btn-outline">Read Now</Link>
                    <Link className="btn btn-primary normal-case text-base" onClick={()=>document.getElementById('borrow_modal').showModal()}>Borrow</Link>
                </div>
            </div>
            
            {/* Dialogue Modal */}
            <dialog id="borrow_modal" className="modal modal-middle sm:modal-middle">
                <div className="modal-box w-10/12 mx-auto">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
                    </form>
                    {/*  */}
                    <h2 className="text-3xl font-semibold text-accent text-center mb-2">Borrow Book</h2>
                    <form onSubmit={handleBorrow} className="card-body py-2 px-0 md:px-4">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered"
                            name="name"
                            defaultValue={user?.displayName || loggedUser?.name}
                            required
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered"
                            name="email"
                            defaultValue={user?.email}
                            required
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Return Date</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Return date"
                            className="input input-bordered"
                            name="return_date"
                            required
                        />
                        </div>
                        <div className="form-control mt-6 flex-row justify-center">
                            <button className="btn btn-primary normal-case text-base">Submit</button>
                        </div>
                    </form>
                    {/*  */}
                </div>
                <Toaster position="top-center"/>
            </dialog>
        </div>
    );
};

export default BookDetails;