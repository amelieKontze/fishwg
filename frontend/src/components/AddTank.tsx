import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import "../stylesheets/AddTank.css"

type Props= {
    getAllTanks: () => void
}

function AddTank(props:Props) {

    const [tankName, setTankName] = useState<string>("")
    const [waterType, setWaterType] = useState<string>("")
    const [tankSize, setTankSize] = useState<number>(0)
    const [tankTemperature, setTankTemperature] = useState<number>(0)
    const [tankPh, setTankPh] = useState<number>(0)


    function onChangeHanlderSetTankName(e:ChangeEvent<HTMLInputElement>) {
        setTankName(e.target.value)
    }

    function onChangeHandlerSetWaterType(e:ChangeEvent<HTMLInputElement>) {
        setWaterType(e.target.value)
    }

    function onChangeHandlerSetTankSize(e:ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTankSize(Number(value))
    }

    function onChangeHandlerSetTankPh(e:ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTankPh(Number(value))
    }

    function addTank() {
        const newTank = {
            name:tankName,
            waterType:waterType,
            tankSizeInLitres:tankSize,
            tankTemperature:tankTemperature,
            tankPh:tankPh
        }
        axios.post("my-tanks/new-tank", newTank)
            .then(props.getAllTanks)
        console.log("tank added")
    }

    return (
        <div>
            <form>
                <input className="input-text-field" placeholder="Name your tank" type="text" value={tankName} onChange={onChangeHanlderSetTankName}/>
                <div className="radio-buttons">
                    <label className="radio-button">
                        <input name="option" type="radio" value={waterType} onChange={onChangeHandlerSetWaterType}/>
                            <div className="radio-circle"></div>
                            <span className="radio-label">Süßwasser</span>
                    </label>
                    <label className="radio-button">
                        <input name="option" type="radio" value={waterType} onChange={onChangeHandlerSetWaterType}/>
                            <div className="radio-circle"></div>
                            <span className="radio-label">Salzwasser</span>
                    </label>
                </div>
                <input className="input-number-field" type="number" min="15" max="33" value={tankSize} onChange={onChangeHandlerSetTankSize}/>
                <br/>
                <input className="input-number-field" type="number" min="5" max="8.5" value={tankPh} onChange={onChangeHandlerSetTankPh}/>
                <br/>
                <button onClick={addTank}>Add Tank</button>
            </form>

        </div>
    );
}

export default AddTank;