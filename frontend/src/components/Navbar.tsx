import React, {useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import "../stylesheets/Navbar.css"
import {AiOutlineLogin} from "@react-icons/all-files/ai/AiOutlineLogin";
import {AiOutlineLogout} from "@react-icons/all-files/ai/AiOutlineLogout";
import {FaBars} from "@react-icons/all-files/fa/FaBars"
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp";
import useAccordion from "../hooks/UseAccordion";

type Props = {
    logout: () => void
    user: string | undefined
}

function Navbar(props: Props) {

    const isLoggedIn = !!props.user

    const {toggleAccordion, isAccordionOpen, setIsAccordionOpen} = useAccordion()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const navbar = document.querySelector('.navbar');
            if (navbar && !navbar.contains(event.target as Node)) {
                setIsAccordionOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsAccordionOpen]);

    return (
        <header>
            <nav className={`navbar ${isAccordionOpen ? "open" : ""}`}>
                <div className="accordion-header" onClick={toggleAccordion}>
                    <button className="menu-button">
                        {isAccordionOpen ? <AiOutlineArrowUp/> : <FaBars>Menu</FaBars>}
                    </button>
                </div>
                <ul className="menu">
                    <li>
                        <Link to="/" className="nav">Home</Link>
                    </li>
                    <li>
                        <Link to="/fish-gallery" className="nav">Fisch Gallerie</Link>
                    </li>
                    <li>
                        <Link to="/my-tanks" className="nav">Meine Aquarien</Link>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <Link to="/" className="nav" onClick={props.logout} title="Logout"><AiOutlineLogout/></Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" className="nav" title="Login"><AiOutlineLogin/></Link>
                        </li>
                    )}
                </ul>
            </nav>
            {isAccordionOpen && <Outlet/>}
        </header>
    );
}

export default Navbar;


