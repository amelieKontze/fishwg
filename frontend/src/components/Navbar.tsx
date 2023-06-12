import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../stylesheets/Navbar.css"
import logo from "../FishWGLogo.png"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} height="100" width="100"/>
                </div>
            <ul className="menu">
                <li>
                    <Link to="/" className="nav">Home</Link>
                </li>
                <li>
                    <Link to="/gallery" className="nav">Gallery</Link>
                </li>
                <li>
                    <Link to="/my_tanks" className="nav">MyTanks</Link>
                </li>
            </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Navbar;