import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-info-content text-base-300">
        <footer className="footer max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8">
            <aside>
                <img src={logo} alt="logo" className="w-48"/>
                <p>Dream Weavers Library<br/>Providing reliable service since 2004</p>
                <nav className="py-2">
                    <div className="grid grid-flow-col gap-4">
                        <Link className="hover:text-primary"><FaTwitter className="text-2xl"></FaTwitter></Link>
                        <Link className="hover:text-primary"><FaFacebook className="text-2xl"></FaFacebook></Link> 
                        <Link className="hover:text-primary"><FaYoutube className="text-2xl"></FaYoutube></Link> 
                    </div>
                </nav>
            </aside> 
            <nav>
                <header className="footer-title">Services</header> 
                <a className="link link-hover hover:text-primary">Branding</a> 
                <a className="link link-hover hover:text-primary">Design</a> 
                <a className="link link-hover hover:text-primary">Marketing</a> 
                <a className="link link-hover hover:text-primary">Advertisement</a>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <a className="link link-hover hover:text-primary">About us</a> 
                <a className="link link-hover hover:text-primary">Contact</a> 
                <a className="link link-hover hover:text-primary">Jobs</a> 
                <a className="link link-hover hover:text-primary">Press kit</a>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover hover:text-primary">Terms of use</a> 
                <a className="link link-hover hover:text-primary">Privacy policy</a> 
                <a className="link link-hover hover:text-primary">Cookie policy</a>
            </nav>
        </footer>
    </div>
    );
};

export default Footer;