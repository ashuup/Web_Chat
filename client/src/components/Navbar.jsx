import React from 'react';
import { IoLogoSnapchat } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to='/home' className="navbar-link"><IoLogoSnapchat className='home-button'/></Link>
            </div>
            <div className="navbar-center">
                <Link to='/home' className="navbar-link text-size">Home</Link>
                <Link to='/about' className="navbar-link text-size">About</Link>
                <Link to='/policy' className="navbar-link text-size">Policy</Link>
            </div>
            <div className="navbar-right">
                <Link to='/login' className="navbar-link text-size">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
