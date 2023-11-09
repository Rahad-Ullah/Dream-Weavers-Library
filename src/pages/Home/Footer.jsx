import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-sky-950 text-base-300">
        <footer className="footer max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8">
            <aside>
                <img src={logo} alt="logo" className="w-48"/>
                <p><span className='font-medium text-base'>Dream Weavers Library</span><br/>Spread the light of knowledge</p>
                <nav className="py-2">
                    <div className="grid grid-flow-col gap-4">
                        <Link className="hover:text-secondary"><FaTwitter className="text-2xl"></FaTwitter></Link>
                        <Link className="hover:text-secondary"><FaFacebook className="text-2xl"></FaFacebook></Link> 
                        <Link className="hover:text-secondary"><FaYoutube className="text-2xl"></FaYoutube></Link> 
                    </div>
                </nav>
            </aside> 
            <nav>
                <header className="footer-title">Categories</header> 
                <Link to={'http://localhost:5173/books/History'} className="link link-hover hover:text-secondary">History</Link> 
                <Link to={'http://localhost:5173/books/Thriller'} className="link link-hover hover:text-secondary">Thriller</Link> 
                <Link to={'http://localhost:5173/books/Sci-Fi'} className="link link-hover hover:text-secondary">Sci-Fi</Link> 
                <Link to={'http://localhost:5173/books/Technology'} className="link link-hover hover:text-secondary">Technology</Link>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <Link to={'http://localhost:5173/all-books'} className="link link-hover hover:text-secondary">All Books</Link> 
                <Link to={''} className="link link-hover hover:text-secondary">About us</Link> 
                <Link to={''} className="link link-hover hover:text-secondary">Contact</Link> 
                <Link to={''} className="link link-hover hover:text-secondary">Meet Us</Link>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <Link className="link link-hover hover:text-secondary">Terms of use</Link> 
                <Link className="link link-hover hover:text-secondary">Privacy policy</Link> 
                <Link className="link link-hover hover:text-secondary">Cookie policy</Link>
            </nav>
        </footer>
    </div>
    );
};

export default Footer;