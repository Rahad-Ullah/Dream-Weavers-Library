
import { Link } from "react-router-dom";
import singUpImg from '../../assets/sign-up.webp'
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
    const {createUser} = useAuth()
    const [error, setError] = useState('')


    const handleSignUp = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoURL = form.get('photo')
        const newUser = {
            name,
            email,
            photoURL
        }

        // password length validation
        if(password.length < 6){
        setError("Password must be at least 6 character")
        return;
        }
        else if(!/[A-Z][`!@#$%^&*()_\-+={};':"|,.<>?~ ]/.test(password)){
            setError('Password must have at least one capital letter and special character')
            return;
        }
        else{
            setError('')
        }
        
        createUser(email, password)
        .then((result) => {
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'Sign up successful',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            axios.post(`http://localhost:5000/users`, newUser)
            .then(res => {
                if(res.data.insertedId){
                    console.log('setting user on database has been successful')
                }
            })
        }).catch((err) => {
            console.log(err)
            Swal.fire({
                title: 'Error!',
                text: 'Sign up failed',
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        });
    }
    
    return (
        <div className="hero min-h-screen font-poppins py-12 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-11 gap-16 p-0 justify-between items-center">
          <div className="w-full hidden md:flex justify-center items-center col-span-5">
            <img src={singUpImg} alt="" />
          </div>
  
          <div className="card flex-shrink-0 col-span-6 w-full border py-10 lg:p-14">
              <h2 className="text-4xl font-semibold text-accent text-center mb-2">Sign Up</h2>
              <form onSubmit={handleSignUp} className="card-body">
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                      name="name"
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
                      required
                  />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Your Photo URL"
                      className="input input-bordered"
                      name="photo"
                      required
                  />
                  </div>
                  <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Your password"
                        className="input input-bordered"
                        name="password"
                        required
                    />
                    <p className="text-sm text-red-500 mt-2">{error}</p>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary normal-case text-base">Sign Up</button>
                  </div>
            </form>
            <p className="text-[#737373] text-center text-sm mt-4">Already have an account? <Link to={'/login'} className="text-primary font-semibold hover:btn-link">Login</Link></p>
          </div>
        </div>
    </div>
    );
};

export default SignUp;