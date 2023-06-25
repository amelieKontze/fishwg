import React, {ChangeEvent, useState} from 'react';
import {Fish} from '../model/FishModel';
import FishCard from '../components/FishCard';
import '../stylesheets/FindFish.css';

type Props = {
    getAllFish: () => void;
    allFish: Fish[];
};

function FindFish(props: Props) {
    const [filterName, setFilterName] = useState<string>('');
    const [filterWaterType, setFilterWaterType] = useState<string>('');
    const [filterOrigin, setFilterOrigin] = useState<string>('');
    const [filterTankSize, setFilterTankSize] = useState<number>(0);
    const [filterTemperature, setFilterTemperature] = useState<number>(0);
    const [filterPh, setFilterPh] = useState<number>(0);

    const filteredFish = props.allFish.filter((fish) => {
        const nameMatch = fish.name.toLowerCase().includes(filterName.toLowerCase());
        const waterTypeMatch = filterWaterType === '' || fish.waterType.toLowerCase() === filterWaterType.toLowerCase();
        const originMatch = filterOrigin === '' || fish.origin.toLowerCase().includes(filterOrigin.toLowerCase());
        const tankSizeMatch = filterTankSize === 0 || fish.minTankSizeInLitres <= filterTankSize;
        const temperatureMatch =
            filterTemperature === 0 ||
            (fish.minTemperature <= filterTemperature && fish.maxTemperature >= filterTemperature);
        const phMatch = filterPh === 0 || (fish.minPh <= filterPh && fish.maxPh >= filterPh);
        return nameMatch && waterTypeMatch && originMatch && tankSizeMatch && temperatureMatch && phMatch;
    });

    function onChangeHandlerSetFilterName(e: ChangeEvent<HTMLInputElement>) {
        setFilterName(e.target.value);
    }

    function onChangeHandlerSetFilterWaterType(e: ChangeEvent<HTMLInputElement>) {
        setFilterWaterType(e.target.value);
    }

    function onChangeHandlerSetFilterTankSize(e: ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setFilterTankSize(value);
    }

    function onChangeHandlerSetFilterOrigin(e: ChangeEvent<HTMLInputElement>) {
        setFilterOrigin(e.target.value);
    }

    function onChangeHandlerSetFilterTemperature(e: ChangeEvent<HTMLSelectElement>) {
        const value = Number(e.target.value);
        setFilterTemperature(value);
    }

    function onChangeHandlerSetFilterPh(e: ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setFilterPh(value);
    }

    return (
        <>
            <h1>Find Fish</h1>
            <div>
                <input
                    placeholder="Search fish by name"
                    className="input-text-field"
                    onChange={onChangeHandlerSetFilterName}
                />
            </div>
            <div className="radio-buttons">
                <label className="radio-button">
                    <input
                        name="option-water-type"
                        type="radio"
                        value="Süßwasser"
                        checked={filterWaterType === 'Süßwasser'}
                        onChange={onChangeHandlerSetFilterWaterType}
                    />
                    <div className="radio-circle"></div>
                    <span className="radio-label">Süßwasser</span>
                </label>
                <label className="radio-button">
                    <input
                        name="option-water-type"
                        type="radio"
                        value="Salzwasser"
                        checked={filterWaterType === 'Salzwasser'}
                        onChange={onChangeHandlerSetFilterWaterType}
                    />
                    <div className="radio-circle"></div>
                    <span className="radio-label">Salzwasser</span>
                </label>
            </div>
            <div>
                <input
                    className="input-number"
                    type="number"
                    placeholder="Tank size in litres"
                    value={filterTankSize !== 0 ? filterTankSize : ''}
                    onChange={onChangeHandlerSetFilterTankSize}
                />
            </div>
            <div className="radio-buttons">
                <label className="radio-button">
                    <input
                        name="option-origin"
                        type="radio"
                        value="Asien"
                        checked={filterOrigin === 'Asien'}
                        onChange={onChangeHandlerSetFilterOrigin}
                    />
                    <div className="radio-circle"></div>
                    <span className="radio-label">Asien</span>
                </label>
                <label className="radio-button">
                    <input
                        name="option-origin"
                        type="radio"
                        value="Amerika"
                        checked={filterOrigin === 'Amerika'}
                        onChange={onChangeHandlerSetFilterOrigin}
                    />
                    <div className="radio-circle"></div>
                    <span className="radio-label">Amerika</span>
                </label>
                <label className="radio-button">
                    <input
                        name="option-origin"
                        type="radio"
                        value="Afrika"
                        checked={filterOrigin === 'Afrika'}
                        onChange={onChangeHandlerSetFilterOrigin}
                    />
                    <div className="radio-circle"></div>
                    <span className="radio-label">Afrika</span>
                </label>
            </div>
            <div>
                <select className="dropdown-temperature" value={filterTemperature}
                        onChange={onChangeHandlerSetFilterTemperature}>
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
                <input
                    className="input-range"
                    type="range"
                    min="5"
                    max="8.5"
                    step="0.1"
                    value={filterPh}
                    onChange={onChangeHandlerSetFilterPh}
                />
                <br/>
                <span id="range-value">{filterPh} pH</span>
            </div>

            {filteredFish.length > 0 ? (
                <div className="gallery">
                    {filteredFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
                </div>
            ) : filterName || filterWaterType || filterOrigin || filterTankSize !== 0 || filterTemperature !== 0 || filterPh !== 0 ? (
                <div className="no-fish-found">No fish found</div>
            ) : (
                <div className="gallery">
                    {props.allFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
                </div>
            )}
        </>
    );
}

export default FindFish;
