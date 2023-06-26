import React from 'react';
import {Tank} from "../model/TankModel";
import "../stylesheets/TankCard.css"
import {useNavigate} from "react-router-dom";

type Props= {
    tank: Tank
}
function TankCard(props:Props) {

    const navigateTo = useNavigate()

    function onClickHandlerForTankDetails() {
        navigateTo("/my-tanks/" + props.tank.id)
    }

    return (
        <div className="tank-card" onClick={onClickHandlerForTankDetails}>
            <h2>{props.tank.name}</h2>
            <p>{props.tank.waterType}</p>
            <p>{props.tank.tankSizeInLitres}l</p>
        </div>
    );
}

export default TankCard;