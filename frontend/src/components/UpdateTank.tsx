import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useInputValues from "../hooks/UseInputValues";
import {Tank} from "../model/TankModel";
import {Fish} from "../model/FishModel";
import axios from "axios";
import TemperatureDropdown from "./TemperatureDropdown";
import WaterTypeRadio from "./WaterTypeRadio";
import SelectFishGallery from "./SelectFishGallery";

type Props = {
    tank: Tank[]
    allFish: Fish[]
    getAllFish: () => void
    user: string
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
            residentFish: selectedFish,
            tankOwner: props.user
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
                <div>
                    <WaterTypeRadio onChange={onChangeHandlerSetWaterType} value={waterType}/>
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
                    Fische ändern
                </button>
                <div>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h3>update fish</h3>
                                <div>
                                    <SelectFishGallery getAllFish={props.getAllFish} allFish={props.allFish}
                                                       handleFishSelection={handleFishSelection}
                                                       selectedFish={selectedFish}/>
                                </div>
                                <button className="button" onClick={toggleModal}>
                                    update fish
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="two-buttons">
                    <button onClick={updateTank} className="button">Ändern</button>
                    <button onClick={cancelUpdateTank} className="button">Abbrechen</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateTank;