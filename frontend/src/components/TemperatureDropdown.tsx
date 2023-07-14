import React, {ChangeEvent} from 'react';

type Props = {
    value: number
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
};

const TemperatureDropdown: React.FC<Props> = ({value, onChange}) => {
    return (
        <select className="dropdown-temperature" value={value} onChange={onChange}>
            <option value="">Wassertemperatur</option>
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
    );
};

export default TemperatureDropdown;