import React, {ChangeEvent, useState} from 'react';
import {Fish} from "../model/FishModel";
import FishCard from "../components/FishCard";

type Props = {
    getAllFish: () => void;
    allFish: Fish[]
}

function FindFish(props: Props) {
    const [filterName, setFilterName] = useState<string>("")
    const [filterWaterType, setFilterWaterType] = useState<string>("")
    const [filterOrigin, setFilterOrigin] = useState<string>("")
    const [filterTankSize, setFilterTankSize] = useState<number>(0)
    const [filterTemperature, serFilterTemperature] = useState<number>(0)
    const [filterPh, setFilterPh] = useState<number>(0)
    const [filterTemperament, setFilterTemperament] = useState<string>("")


    const filteredFish = props.allFish.filter((fish) => {
        const nameMatch = fish.name.toLowerCase().includes(filterName.toLowerCase());
        const waterTypeMatch = fish.waterType.toLowerCase() === filterWaterType.toLowerCase();
        const tankSizeMatch = fish.minTankSizeInLitres <= filterTankSize;
        return nameMatch && waterTypeMatch && tankSizeMatch;
    });

    function onChangeHandlerSetFilterName(e: ChangeEvent<HTMLInputElement>) {
        setFilterName(e.target.value)
    }

    function onChangeHandlerSetFilterWaterType(e: ChangeEvent<HTMLInputElement>) {
        setFilterWaterType(e.target.value)
    }

    function onChangeHandlerSetFilterTankSize(e: ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setFilterTankSize(value);
    }

    function onChangeHandlerSetFilterOrigin(e: ChangeEvent<HTMLInputElement>) {
        setFilterOrigin(e.target.value)
    }

    return (
        <>
            <h1>Find Fish</h1>

            <input placeholder="Search fish by name" className="input-text-field"
                   onChange={onChangeHandlerSetFilterName}/>
            <div className="radio-buttons">
                <label className="radio-button">
                    <input name="option-water-type" type="radio" value="Süßwasser"
                           checked={filterWaterType === "Süßwasser"}
                           onChange={onChangeHandlerSetFilterWaterType}/>
                    <div className="radio-circle"></div>
                    <span className="radio-label">Süßwasser</span>
                </label>
                <label className="radio-button">
                    <input name="option-water-type" type="radio" value="Salzwasser"
                           checked={filterWaterType === "Salzwasser"}
                           onChange={onChangeHandlerSetFilterWaterType}/>
                    <div className="radio-circle"></div>
                    <span className="radio-label">Salzwasser</span>
                </label>
            </div>
            <div>
                <input className="input-number" type="number" placeholder="Tank size in litres"
                       value={filterTankSize !== 0 ? filterTankSize : ""} onChange={onChangeHandlerSetFilterTankSize}/>
            </div>
            <div className="radio-buttons">
                <label className="radio-button">
                    <input name="option-origin" type="radio" value="Asien" checked={filterOrigin === "Asien"}
                           onChange={onChangeHandlerSetFilterWaterType}/>
                    <div className="radio-circle"></div>
                    <span className="radio-label">Asien</span>
                </label>
                <label className="radio-button">
                    <input name="option-origin" type="radio" value="Amerika" checked={filterOrigin === "Amerika"}
                           onChange={onChangeHandlerSetFilterWaterType}/>
                    <div className="radio-circle"></div>
                    <span className="radio-label">Amerika</span>
                </label>
            </div>


            {filteredFish.length > 0 && (
                <div className="gallery">
                    {filteredFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
                </div>
            )}

            {filteredFish.length === 0 && props.allFish.length > 0 && (
                <div className="gallery">
                    {props.allFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
                </div>
            )}
        </>
    );
}

export default FindFish;