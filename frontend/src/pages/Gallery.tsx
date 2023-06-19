import React, {useEffect} from 'react';
import FishCard from "../components/FishCard";
import {Fish} from "../model/FishModel";
import "../stylesheets/Gallery.css"

type Props = {
    getAllFish: () => void;
    allFish: Fish[]
}

function Gallery(props:Props) {

    useEffect(() => {
        props.getAllFish()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <div className="gallery">
            <h1>All Fish</h1>
            {props.allFish.map(fish => <FishCard  key={fish.id} fish={fish}/>)}
        </div>
       </>
    );
}

export default Gallery;
