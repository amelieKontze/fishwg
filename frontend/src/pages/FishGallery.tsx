import React, {ChangeEvent, useState} from 'react';
import {Fish} from '../model/FishModel';
import FishCard from '../components/FishCard';
import '../stylesheets/FindFish.css';
import TemperatureDropdown from "../components/TemperatureDropdown";
import UseAccordion from "../hooks/UseAccordion";
import {AiOutlineCloseCircle} from "@react-icons/all-files/ai/AiOutlineCloseCircle";

type Props = {
    getAllFish: () => void;
    allFish: Fish[];
};

function FishGallery(props: Props) {
    const [filterName, setFilterName] = useState<string>('');
    const [filterWaterType, setFilterWaterType] = useState<string>('');
    const [filterOrigin, setFilterOrigin] = useState<string>('');
    const [filterTankSize, setFilterTankSize] = useState<number>(0);
    const [filterTemperature, setFilterTemperature] = useState<number>(0);
    const [filterPh, setFilterPh] = useState<number>(0);

    const {toggleAccordion, isAccordionOpen} = UseAccordion();

    const filteredFish = props.allFish.filter((fish) => {
        const nameMatch = fish.name.toLowerCase().includes(filterName.toLowerCase());
        const waterTypeMatch = filterWaterType === '' || fish.waterType.toLowerCase() === filterWaterType.toLowerCase();
        const originMatch = filterOrigin === '' || fish.origin.toLowerCase().includes(filterOrigin.toLowerCase());
        const tankSizeMatch = filterTankSize === 0 || fish.minTankSizeInLitres <= filterTankSize;
        const temperatureMatch = filterTemperature === 0 || (fish.minTemperature <= filterTemperature && fish.maxTemperature >= filterTemperature);
        const phMatch = filterPh === 0 || (fish.minPh <= filterPh && fish.maxPh >= filterPh);
        return nameMatch && waterTypeMatch && originMatch && tankSizeMatch && temperatureMatch && phMatch;
    });

    let showFilteredFish;

    if (filteredFish.length > 0) {
        showFilteredFish = (
            <div className="gallery">
                {filteredFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
            </div>
        );
    } else if (filterName || filterWaterType || filterOrigin || filterTankSize !== 0 || filterTemperature !== 0 || filterPh !== 0) {
        showFilteredFish = (
            <div className="no-fish-found">No fish found</div>
        );
    } else {
        showFilteredFish = (
            <div className="gallery">
                {props.allFish.map(fish => <FishCard key={fish.id} fish={fish}/>)}
            </div>
        );
    }

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

    function clearFilters() {
        setFilterName('');
        setFilterWaterType('');
        setFilterOrigin('');
        setFilterTankSize(0);
        setFilterTemperature(0);
        setFilterPh(0);
    }

    return (
        <>
            <h1>Fisch Gallerie</h1>
            <button className="find-fish-accordion-button button" onClick={toggleAccordion}>
                {isAccordionOpen ? <AiOutlineCloseCircle/> : 'Filtern'}
            </button>
            <div className="find-fish-accordion">
                {isAccordionOpen && (
                    <div className="accordion-content">
                        <div>
                            <br/>
                            <input
                                placeholder="Fisch nach Namen suchen"
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
                                placeholder="Wasservolumen (in l)"
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
                            <TemperatureDropdown
                                value={filterTemperature}
                                onChange={onChangeHandlerSetFilterTemperature}
                            />
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
                            <button className="button" onClick={clearFilters}>
                                Filter löschen
                            </button>
                        </div>
                        <br/>
                    </div>
                )}
            </div>
            {showFilteredFish}
        </>
    );
}

export default FishGallery;
