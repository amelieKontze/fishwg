import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../stylesheets/AddTank.css"
import "../stylesheets/AddTankModal.css"
import {useNavigate} from "react-router-dom";
import {Fish} from "../model/FishModel";
import TemperatureDropdown from "./TemperatureDropdown";
import useInputValues from "../hooks/UseInputValues";
import WaterTypeRadio from "./WaterTypeRadio";
import SelectFishGallery from "./SelectFishGallery";

type Props= {
    getAllTanks: () => void
    getAllFish: () => void
    allFish: Fish[]
}

function AddTank(props:Props) {

    const {
        tankName, toggleModal, onChangeHandlerSetTankName,
        waterType, onChangeHandlerSetWaterType,
        tankSize, onChangeHandlerSetTankSize,
        tankTemperature, onChangeHandlerSetTankTemperature,
        tankPh, onChangeHandlerSetTankPh,
        modal
    } = useInputValues()
    const [selectedFish, setSelectedFish] = useState<Fish[]>([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        props.getAllFish();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFishSelection = (fish: Fish) => {
        const isSelected = selectedFish.some((selected) => selected.id === fish.id);

        if (isSelected) {
            const updatedFish = selectedFish.filter((selected) => selected.id !== fish.id);
            setSelectedFish(updatedFish);
        } else {
            setSelectedFish([...selectedFish, fish]);
        }
    };

    function addTank() {
        const newTank = {
            name: tankName,
            waterType: waterType,
            tankSizeInLitres: tankSize,
            tankTemperature: tankTemperature,
            tankPh: tankPh,
            residentFish: selectedFish
        }
        axios.post("/api/tank/new-tank", newTank)
            .then(() => navigateTo("/my-tanks"))
    }

    function cancelAddTank() {
        navigateTo("/my-tanks")
    }

    return (
        <div className="new-tank">
            <div>
                <input className="input-text-field" placeholder="Name your tank" type="text" value={tankName}
                       onChange={onChangeHandlerSetTankName}/>
                <div>
                    <WaterTypeRadio onChange={onChangeHandlerSetWaterType} value={waterType}/>
                </div>
                <div>
                    <TemperatureDropdown value={tankTemperature} onChange={onChangeHandlerSetTankTemperature}/>
                </div>
                <div>
                    <input className="input-number" type="number" placeholder="Tank size in litres"
                           value={tankSize !== 0 ? tankSize : ""} onChange={onChangeHandlerSetTankSize}/>
                </div>
                <div>
                    <input className="input-range" type="range" min="5" max="8.5" step="0.1" value={tankPh}
                           onChange={onChangeHandlerSetTankPh}/>
                    <br/>
                    <span id="range-value">{tankPh} pH</span>
                </div>
                <button className="button" onClick={toggleModal}>
                    Add Fish
                </button>
                <div>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h3>Add Fish to Tank</h3>
                                <div>
                                    <SelectFishGallery getAllFish={props.getAllFish} allFish={props.allFish}
                                                       handleFishSelection={handleFishSelection}
                                                       selectedFish={selectedFish}/>
                                </div>
                                <button className="button" onClick={toggleModal}>
                                    Add Fish
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="two-buttons">
                    <button onClick={addTank} className="button">Add</button>
                    <button onClick={cancelAddTank} className="button">cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddTank;