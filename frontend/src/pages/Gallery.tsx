import React from 'react';
import FishCard from "../components/FishCard";
import {Fish} from "../model/FishModel";

type Props = {
    getAllFish: () => void;
    allFish: Fish[]
}

function Gallery(props:Props) {
    return (
        <div>
            <h1>All Fish</h1>
            {props.allFish.map(fish => <FishCard fish={fish} getAllFish={props.getAllFish}/>)}
        </div>
    );
}

export default Gallery;
