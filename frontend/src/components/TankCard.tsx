import React from 'react';
import {Tank} from "../model/TankModel";

type Props= {
    tank: Tank
}
function TankCard(props:Props) {
    return (
        <div className="tank-card">
            <h2>{props.tank.name}</h2>
            <p>{props.tank.waterType}</p>
            <p>{props.tank.tankSizeInLitres}l</p>
        </div>
    );
}

export default TankCard;