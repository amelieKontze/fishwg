import React, {useEffect} from 'react';
import {Fish} from "../model/FishModel";

type Props = {
    getAllFish: () => void
    allFish: Fish[]
    selectedFish: Fish[];
    handleFishSelection: (fish: Fish) => void;
}

function SelectFishGallery(props: Props) {

    useEffect(() => {
        props.getAllFish();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="gallery">
            {props.allFish.map(fish => (
                <div key={fish.id} className="fish-card" id="add-fish-card">
                    <h3>{fish.name}</h3>
                    <img src={fish.image}/>
                    <p>Herkunft: {fish.origin}</p>
                    <p>{fish.temperament}</p>
                    <button onClick={() => props.handleFishSelection(fish)} className="button">
                        {props.selectedFish.some((selected) => selected.id === fish.id) ? "Deselect" : "Select"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SelectFishGallery;