import React, {useEffect, useState} from 'react';
import {Fish} from "../model/FishModel";
import "../stylesheets/AddFishToTank.css"
import "../stylesheets/Gallery.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

type Props = {
    getAllFish: () => void;
    allFish: Fish[];
}

function AddFishToTank(props: Props) {
    const [selectedFish, setSelectedFish] = useState<Fish[]>([]);
    const navigateTo = useNavigate()

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

    function addFishToTank() {
        const addFish = {
            residentFish: selectedFish
        }
        axios.post("/my-tanks/new-tank", addFish)
            .then(n => navigateTo("/my-tanks"))
    }

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
                        <button onClick={() => handleFishSelection(fish)} className="button">
                            {selectedFish.some(selected => selected.id === fish.id)
                                ? "Deselect"
                                : "Select"}
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={addFishToTank}>Add Selected Fish</button>
        </div>
    );
}

export default AddFishToTank;