import React from 'react';
import {Tank} from "../model/TankModel";
import {useNavigate, useParams} from "react-router-dom";
import "../stylesheets/TankDetailsCard.css"
import axios from "axios";

type Props = {
    allTanks: Tank[]
}

function TankDetailsCard(props: Props) {

    const params = useParams()
    const tankId = params.id
    const actualTank = props.allTanks.find(currentTank => currentTank.id === tankId)
    const navigateTo = useNavigate()

    function onChangeHandlerBack() {
        navigateTo("/my-tanks")
    }

    function deleteTank() {
        axios.delete("/my-tanks/" + actualTank?.id)
            .then(n => navigateTo("/my-tanks"))
    }

    return (
        <div className="tank-card" id="tank-details">
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
            <button className="button" onClick={onChangeHandlerBack}>zurück</button>
            <button className="button" id="delete-button" onClick={deleteTank}>Löschen</button>
        </div>
    );
}

export default TankDetailsCard;