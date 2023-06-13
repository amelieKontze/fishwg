import React from 'react';
import {Fish} from "../model/FishModel";

type Props = {
    fish: Fish
    getAllFish: () => void;
}

function FishCard(props:Props) {
    return (
        <div className="fishCard">
            <h2>{props.fish.name}</h2>
            <img className="fishPic" src={props.fish.image} alt={"picture of fish"}/>
            <p>{props.fish.waterType}</p>
        </div>
    );
}

export default FishCard;