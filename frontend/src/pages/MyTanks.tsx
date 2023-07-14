import React, {useEffect,} from 'react';
import TankCard from "../components/TankCard";
import {Tank} from "../model/TankModel";
import "../stylesheets/MyTanks.css"
import {useNavigate} from "react-router-dom";


type Props = {
    getAllTanks: () => void
    allTanks: Tank[]
    user: string
}

function MyTanks(props: Props) {

    const navigateTo = useNavigate();
    const userTanks = props.allTanks.filter(tank => tank.tankOwner === props.user)

    useEffect(() => {
        props.getAllTanks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function addNewTank() {
        navigateTo("/new-tank")
    }

    return (
        <div>
            <div className="page-heading">
                <h1>Meine Aquarien</h1>
            </div>
            <button onClick={addNewTank} className="button" id="new-aquarium-button">Neues Aquarium hinzufügen</button>
            <div className="tanks">
                {userTanks.map(tank => <TankCard key={tank.id} tank={tank}/>)}
            </div>
        </div>
    );
}

export default MyTanks;