import React, {ChangeEvent} from 'react';

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const WaterTypeRadio: React.FC<Props> = ({value, onChange}) => {

    return (
        <div className="radio-buttons">
            <label className="radio-button">
                <input name="option" type="radio" value="Süßwasser" checked={value === "Süßwasser"}
                       onChange={onChange}/>
                <div className="radio-circle"></div>
                <span className="radio-label">Süßwasser</span>
            </label>
            <label className="radio-button">
                <input name="option" type="radio" value="Salzwasser" checked={value === "Salzwasser"}
                       onChange={onChange}/>
                <div className="radio-circle"></div>
                <span className="radio-label">Salzwasser</span>
            </label>
        </div>
    );
}

export default WaterTypeRadio;