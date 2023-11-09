import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import user_image from '../../assets/user.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const {user, logOut} = useAuth()
    const [loggedUser, setLoggedUser] = useState({})
    console.log(loggedUser)

    useEffect( () => {
        if(user){
            axios.get(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => setLoggedUser(res.data))
        }
    },[user])

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log('Logout success')
            setLoggedUser(null)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
    <div className="drawer z-20 sticky top-0 bg-base-100 bg-opacity-80">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col shadow-md">
            {/* Navbar */}
            <div className="w-full navbar justify-between p-3 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="px-2 mx-2">
                    <img src={logo} alt="logo" className='h-14' />
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex gap-1">
                    {/* Navbar menu content here */}
                        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Home</NavLink></li>
                        <li><NavLink to={'/add-book'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Add Book</NavLink></li>
                        <li><NavLink to={'/all-books'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>All Books</NavLink></li>
                        <li><NavLink to={'/borrowed-books'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Borrowed Books</NavLink></li>
                        {
                            user ?
                            <li><NavLink to={'/login'} onClick={handleLogOut} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Logout</NavLink></li>
                            : <li><NavLink to={'/login'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <div>
                    {
                        // show user name if user exist
                        user &&
                        <h3 className='font-medium text-accent text-xl mr-3 hidden lg:block'>Hi, {user?.displayName || loggedUser?.name}</h3>
                    }
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full flex justify-center items-center">
                            {
                                // show user photo if user exist
                                user ?
                                <img src={user?.photoURL || loggedUser?.photoURL} alt="" />
                                : <img src={user_image} alt="" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            {user?.email}
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        {
                        user ?
                        <li onClick={handleLogOut} className='text-red-500'><a>Logout</a></li>
                        : <li><Link to={'/login'}>Login</Link></li>
                        }
                    </ul>
                    </div>
                </div>
            </div>
            {/* Page content here */}
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className=" p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
                <li><NavLink to={'/'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Home</NavLink></li>
                <li><NavLink to={'/add-book'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Add Book</NavLink></li>
                <li><NavLink to={'/all-books'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>All Books</NavLink></li>
                <li><NavLink to={'/borrowed-books'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Borrowed Books</NavLink></li>
                {
                    user ?
                    <li><NavLink to={'login'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base text-red-500 w-full'}>Logout</NavLink></li>
                    : <li><NavLink to={'login'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Login</NavLink></li>
                }
            </ul>
        </div>
    </div>
    );
};

export default Navbar;