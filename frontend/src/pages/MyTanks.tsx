import React, {useEffect, } from 'react';
import TankCard from "../components/TankCard";
import {Tank} from "../model/TankModel";
import "../stylesheets/MyTanks.css"
import {useNavigate} from "react-router-dom";

type Props= {
    getAllTanks: () => void
    allTanks: Tank[]
}
function MyTanks(props:Props) {

    const navigateTo = useNavigate();

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
            <h1>My Tanks</h1>
            </div>
        <button onClick={addNewTank} className="button">Add Tank</button>
          <div className="tanks">
              {props.allTanks.map(tank => <TankCard key={tank.id} tank={tank}/>)}
          </div>
        </div>
    );
}

export default MyTanks;