import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../stylesheets/Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
            <ul className="menu">
                <li>
                    <Link to="/" className="nav">Home</Link>
                </li>
                <li>
                    <Link to="/gallery" className="nav">Gallery</Link>
                </li>
                <li>
                    <Link to="/find-fish" className="nav">FishFind</Link>
                </li>
                <li>
                    <Link to="/my-tanks" className="nav">MyTanks</Link>
                </li>
                <li>
                    <Link to="/blog" className="nav">Blog</Link>
                </li>
            </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Navbar;