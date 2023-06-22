import React, {useEffect, useState} from 'react';
import {Fish} from "../model/FishModel";
import FishCard from "../components/FishCard";

type Props = {
    getAllFish: () => void;
    allFish: Fish[]
}

function FindFish(props: Props) {
    const [filterName, setFilterName] = useState<string>("")
    const [filterWaterType, setFilterWaterType] = useState<string>("")
    const [filterOrigin, setFilterOrigin] = useState<string>("")
    const [filterTankSize, setFilterTankSize] = useState<number>(0)
    const [filterTemperature, serFilterTemperature] = useState<number>(0)
    const [filterPh, setFilterPh] = useState<number>(0)
    const [filterTemperament, setFilterTemperament] = useState<string>("")

    useEffect(() => {
        props.getAllFish()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <h1>Find Fish</h1>
            {props.allFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
        </>
    );
}

export default FindFish;