import React, {useEffect} from 'react';
import {Fish} from "../model/FishModel";
import FishCard from "../components/FishCard";

type Props = {
    getAllFish: () => void;
    allFish: Fish[]
}

function FindFish(props: Props) {

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