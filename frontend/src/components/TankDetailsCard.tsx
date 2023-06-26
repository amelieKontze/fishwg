import React from 'react';
import {Tank} from "../model/TankModel";
import {useParams} from "react-router-dom";
import "../stylesheets/TankDetailsCard.css"

type Props = {
    allTanks: Tank[]
}

function TankDetailsCard(props: Props) {

    const params = useParams()
    const tankId = params.id
    const actualTank = props.allTanks.find(currentTank => currentTank.id === tankId)

    return (
        <div className="tank-details">
            <h2>{actualTank?.name}</h2>
            <p>{actualTank?.waterType}</p>
            <p>Wasservolumen: <br/> {actualTank?.tankSizeInLitres}l</p>
            <p>Wassertemperatur: <br/> {actualTank?.tankTemperature}°C</p>
            <p>ph-Wert: {actualTank?.tankPh}</p>
            <div>Bewohner: {actualTank?.residentFish.map((fish) => (
                <div key={fish.id}>
                    <p>{fish.name}</p>
                    <img src={fish.image} alt={fish.name}/>
                </div>
            ))}</div>

        </div>
    );
}

export default TankDetailsCard;