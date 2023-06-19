import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import "../stylesheets/AddTank.css"
import {useNavigate} from "react-router-dom";

type Props= {
    getAllTanks: () => void
}

function AddTank(props:Props) {

    const [tankName, setTankName] = useState<string>("")
    const [waterType, setWaterType] = useState<string>("")
    const [tankSize, setTankSize] = useState<number>(0)
    const [tankTemperature, setTankTemperature] = useState<string>("");
    const [tankPh, setTankPh] = useState<number>(0)
    const navigateTo = useNavigate();

    function onChangeHandlerSetTankName(e:ChangeEvent<HTMLInputElement>) {
        setTankName(e.target.value)
    }

    function onChangeHandlerSetWaterType(e:ChangeEvent<HTMLInputElement>) {
        setWaterType(e.target.value)
    }

    function onChangeHandlerSetTankSize(e:ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setTankSize(value);
    }

    function onChangeHandlerSetTankPh(e:ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setTankPh(value);
    }

    function onChangeHandlerSetTankTemperature(e:ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setTankTemperature(value);
    }

    function addTank() {
        const newTank = {
            name:tankName,
            waterType:waterType,
            tankSizeInLitres:tankSize,
            tankTemperature:tankTemperature,
            tankPh:tankPh
        }
        axios.post("/my-tanks/new-tank", newTank)
            .then(n => navigateTo("/my-tanks"))
    }

    return (
        <div className="new-tank">
            <form>
                <input className="input-text-field" placeholder="Name your tank" type="text" value={tankName} onChange={onChangeHandlerSetTankName}/>
                <div className="radio-buttons">
                    <label className="radio-button">
                        <input name="option" type="radio" value="Süßwasser" checked={waterType === "Süßwasser"} onChange={onChangeHandlerSetWaterType}/>
                            <div className="radio-circle"></div>
                            <span className="radio-label">Süßwasser</span>
                    </label>
                    <label className="radio-button">
                        <input name="option" type="radio" value="Salzwasser" checked={waterType === "Salzwasser"} onChange={onChangeHandlerSetWaterType}/>
                            <div className="radio-circle"></div>
                            <span className="radio-label">Salzwasser</span>
                    </label>
                </div>
                <div>
                    <select className="dropdown-temperature" value={tankTemperature} onChange={onChangeHandlerSetTankTemperature}>
                        <option value="">Tank Temperature</option>
                        <option value="15">15°C</option>
                        <option value="16">16°C</option>
                        <option value="17">17°C</option>
                        <option value="18">18°C</option>
                        <option value="19">19°C</option>
                        <option value="20">20°C</option>
                        <option value="21">21°C</option>
                        <option value="22">22°C</option>
                        <option value="23">23°C</option>
                        <option value="24">24°C</option>
                        <option value="25">25°C</option>
                        <option value="26">26°C</option>
                        <option value="27">27°C</option>
                        <option value="28">28°C</option>
                        <option value="29">29°C</option>
                        <option value="30">30°C</option>
                        <option value="31">31°C</option>
                        <option value="32">32°C</option>
                        <option value="33">33°C</option>
                    </select>
                </div>
                <div>
                <input className="input-number" type="number"  placeholder="Tank size in litres" value={tankSize !== 0 ? tankSize : ""} onChange={onChangeHandlerSetTankSize}/>
                </div>
                <div>
                    <input className="input-range" type="range" min="5" max="8.5" step="0.1"  value={tankPh} onChange={onChangeHandlerSetTankPh}/>
                    <br/>
                    <span id="range-value">{tankPh} pH</span>
                </div>
                <button onClick={addTank} className="button">Add</button>
            </form>

        </div>
    );
}

export default AddTank;