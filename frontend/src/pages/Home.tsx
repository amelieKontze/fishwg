import React from 'react';
import "../stylesheets/Home.css"
import {GiAquarium} from "@react-icons/all-files/gi/GiAquarium";
import {FaFish} from "@react-icons/all-files/fa/FaFish";
import {useNavigate} from "react-router-dom";

function Home() {

    const navigateTo = useNavigate()

    function goToFish() {
        navigateTo("/fish-gallery")
    }

    function goToTanks() {
        navigateTo("/my-tanks")
    }

    return (
        <div className="home">
            <h1>Willkommen</h1>
            <button className="home-redirects button" onClick={goToFish}>Hier geht's zu den Fischen
                <br/>
                <FaFish size={40}/>
            </button>
            <br/>
            <button className="home-redirects button" onClick={goToTanks}>Hier geht's zu deinen Aquarien
                <br/>
                <GiAquarium size={40}/>
            </button>
        </div>
    );
}

export default Home;