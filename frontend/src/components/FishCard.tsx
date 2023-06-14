import React from 'react';
import {Fish} from "../model/FishModel";
import "../stylesheets/FishCard.css"

type Props = {
    fish: Fish
}

function FishCard(props:Props) {
    return (
        <div className="fish-card">
            <div className="fish-card-inner">
                <div className="fish-card-front">
                    <h2>{props.fish.name}</h2>
                    <img className="fish-pic" src={props.fish.image} alt={"picture of fish"}/>
                </div>
                <div className="fish-card-back">
                    <p>{props.fish.waterType}</p>
                    <p>{props.fish.origin}</p>
                    <p>{props.fish.temperatureInCelsius}</p>
                    <p>{props.fish.pH}</p>
                    <p>{props.fish.minTankSizeInLitres}liter</p>
                </div>
            </div>
        </div>
    );
}

export default FishCard;