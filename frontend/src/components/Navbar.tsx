import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "../stylesheets/Navbar.css"
import {AiOutlineLogin} from "@react-icons/all-files/ai/AiOutlineLogin";
import {AiOutlineLogout} from "@react-icons/all-files/ai/AiOutlineLogout";

type Props = {
    logout: () => void
    user: string | undefined
}

function Navbar(props: Props) {

    const isLoggedIn = !!props.user

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function toggleAccordion() {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <header>
            <nav className={`navbar ${isAccordionOpen ? "open" : ""}`}>
                <div className="accordion-header" onClick={toggleAccordion}>
                    <button className="menu-button">
                    <span className="accordion-icon">
                    {isAccordionOpen ? "-" : "+"}
                    </span>
                        Menu
                    </button>
                </div>
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
                    {isLoggedIn ? (
                        <li>
                            <Link to="/" className="nav" onClick={props.logout}>Logout<AiOutlineLogout/></Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" className="nav">Login<AiOutlineLogin/></Link>
                        </li>
                    )}
                </ul>
            </nav>
            {isAccordionOpen && <Outlet/>}
        </header>
    );
}

export default Navbar;


