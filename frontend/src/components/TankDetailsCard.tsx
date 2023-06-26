import React from 'react';
import {Tank} from "../model/TankModel";
import {useParams} from "react-router-dom";

type Props = {
    allTanks: Tank[]
}

function TankDetailsCard(props: Props) {

    const params = useParams()
    const tankId = params.id
    const actualTank = props.allTanks.find(currentTank => currentTank.id === tankId)

    return (
        <div>
            <h2>{actualTank?.name}</h2>
        </div>
    );
}

export default TankDetailsCard;