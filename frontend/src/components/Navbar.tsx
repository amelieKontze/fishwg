import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../stylesheets/Navbar.css"

function Navbar() {
    return (
        <header>
            <nav className="navbar">
            <ul className="menu">
                <li>
                    <Link to="/" className="nav">Home</Link>
                </li>
                <li>
                    <Link to="/gallery" className="nav">Gallery</Link>
                </li>
                <li>
                    <Link to="/find-fish" className="nav">FindFish</Link>
                </li>
                <li>
                    <Link to="/my-tanks" className="nav">MyTanks</Link>
                </li>
            </ul>

            </nav>
            <Outlet/>
        </header>
    );
}

export default Navbar;