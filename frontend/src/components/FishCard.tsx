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
                    <div>
                        <p>Herkunft:</p>
                        <p>{props.fish.origin}</p>
                    </div>
                    <p>{props.fish.minTemperature}-{props.fish.maxTemperature}°C</p>
                    <p>pH {props.fish.minPh}-{props.fish.maxPh}</p>
                    <p>mind. {props.fish.minTankSizeInLitres} Liter</p>
                </div>
            </div>
        </div>
    );
}

export default FishCard;