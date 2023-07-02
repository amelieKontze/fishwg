import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useInputValues from "../hooks/UseInputValues";
import {Tank} from "../model/TankModel";
import {Fish} from "../model/FishModel";
import axios from "axios";
import TemperatureDropdown from "./TemperatureDropdown";

type Props = {
    tank: Tank[]
    allFish: Fish[]
}

function UpdateTank(props: Props) {

    const params = useParams()
    const id = params.id
    const tankToUpdate = props.tank.find(currentTank => currentTank.id === id)
    const {
        tankName, setTankName, toggleModal, onChangeHandlerSetTankName,
        waterType, setWaterType, onChangeHandlerSetWaterType,
        tankSize, setTankSize, onChangeHandlerSetTankSize,
        tankTemperature, setTankTemperature, onChangeHandlerSetTankTemperature,
        tankPh, setTankPh, onChangeHandlerSetTankPh,
        modal
    } = useInputValues()
    const [selectedFish, setSelectedFish] = useState<Fish[]>([]);

    const handleFishSelection = (fish: Fish) => {
        const isSelected = selectedFish.some(selected => selected.id === fish.id);

        if (isSelected) {
            const updatedFish = selectedFish.filter(selected => selected.id !== fish.id);
            setSelectedFish(updatedFish);
        } else {
            setSelectedFish([...selectedFish, fish]);
        }
    };

    const navigateTo = useNavigate()

    useEffect(() => {
        if (tankToUpdate) {
            setTankName(tankToUpdate.name)
            setWaterType(tankToUpdate.waterType)
            setTankSize(tankToUpdate.tankSizeInLitres)
            setTankTemperature(tankToUpdate.tankTemperature)
            setTankPh(tankToUpdate.tankPh)
            setSelectedFish(tankToUpdate.residentFish)
        }
    }, [tankToUpdate])

    function updateTank() {
        const updatedTank = {
            id: tankToUpdate?.id ?? '',
            name: tankName,
            waterType: waterType,
            tankSizeInLitres: tankSize,
            tankTemperature: tankTemperature,
            tankPh: tankPh,
            residentFish: selectedFish
        }
        axios.put("/api/tank/update-tank/" + tankToUpdate?.id, updatedTank)
            .then(n => navigateTo("/my-tanks"))
    }

    function cancelUpdateTank() {
        navigateTo(-1)
    }

    return (
        <div className="new-tank">
            <div>
                <input className="input-text-field" type="text" value={tankName}
                       onChange={onChangeHandlerSetTankName}/>
                <div className="radio-buttons">
                    <label className="radio-button">
                        <input name="option" type="radio" value="Süßwasser" checked={waterType === "Süßwasser"}
                               onChange={onChangeHandlerSetWaterType}/>
                        <div className="radio-circle"></div>
                        <span className="radio-label">Süßwasser</span>
                    </label>
                    <label className="radio-button">
                        <input name="option" type="radio" value="Salzwasser" checked={waterType === "Salzwasser"}
                               onChange={onChangeHandlerSetWaterType}/>
                        <div className="radio-circle"></div>
                        <span className="radio-label">Salzwasser</span>
                    </label>
                </div>
                <div>
                    <TemperatureDropdown value={tankTemperature} onChange={onChangeHandlerSetTankTemperature}/>
                </div>
                <div>
                    <input className="input-number" type="number" value={tankSize !== 0 ? tankSize : ""}
                           onChange={onChangeHandlerSetTankSize}/>
                </div>
                <div>
                    <input className="input-range" type="range" min="5" max="8.5" step="0.1" value={tankPh}
                           onChange={onChangeHandlerSetTankPh}/>
                    <br/>
                    <span id="range-value">{tankPh} pH</span>
                </div>
                <button className="button" onClick={toggleModal}>
                    change fish
                </button>
                <div>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h3>update fish</h3>
                                <div className="gallery">
                                    {props.allFish.map(fish => (
                                        <div key={fish.id} className="fish-card" id="add-fish-card">
                                            <h3>{fish.name}</h3>
                                            <img src={fish.image}/>
                                            <p>Herkunft: {fish.origin}</p>
                                            <p>{fish.temperament}</p>
                                            <button onClick={() => handleFishSelection(fish)} className="button">
                                                {selectedFish.some(selected => selected.id === fish.id)
                                                    ? "Deselect"
                                                    : "Select"}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button className="button" onClick={toggleModal}>
                                    update fish
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="two-buttons">
                    <button onClick={updateTank} className="button">update</button>
                    <button onClick={cancelUpdateTank} className="button">cancel</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateTank;