import React, {useEffect, useState} from 'react';
import {Fish} from "../model/FishModel";
import "../stylesheets/AddFishToTank.css"
import "../stylesheets/Gallery.css"

type Props = {
    getAllFish: () => void;
    allFish: Fish[];
}

function AddFishToTank(props: Props) {
    const [selectedFish, setSelectedFish] = useState<Fish[]>([]);

    useEffect(() => {
        props.getAllFish();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFishSelection = (fish: Fish) => {
        const isSelected = selectedFish.some(selected => selected.id === fish.id);

        if (isSelected) {
            const updatedFish = selectedFish.filter(selected => selected.id !== fish.id);
            setSelectedFish(updatedFish);
        } else {
            setSelectedFish([...selectedFish, fish]);
        }
    };

    return (
        <div>
            <h1>Add Fish to Tank</h1>
            <div className="gallery">
                {props.allFish.map(fish => (
                    <div key={fish.id} className="fish-card" id="add-fish-card">
                        <h3>{fish.name}</h3>
                        <img src={fish.image}/>
                        <p><em>Herkunft:</em> {fish.origin}</p>
                        <p>{fish.temperament}</p>
                        <button onClick={() => handleFishSelection(fish)}>
                            {selectedFish.some(selected => selected.id === fish.id)
                                ? "Deselect"
                                : "Select"}
                        </button>
                    </div>
                ))}
            </div>
            <button>Add Selected Fish</button>
        </div>
    );
}

export default AddFishToTank;