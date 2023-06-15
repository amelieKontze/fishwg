import React, {useEffect} from 'react';
import TankCard from "../components/TankCard";
import {Tank} from "../model/TankModel";

type Props= {
    getAllTanks: () => void
    allTanks: Tank[]
}
function MyTanks(props:Props) {

    useEffect(() => {
        props.getAllTanks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
        <button>Add Tank</button>
            {props.allTanks.map(tank => <TankCard key={tank.id} tank={tank}/>)}
        </div>
    );
}

export default MyTanks;