import {ChangeEvent, useState} from 'react';

function UseInputValues() {

    const [tankName, setTankName] = useState<string>("")
    const [waterType, setWaterType] = useState<string>("")
    const [tankSize, setTankSize] = useState<number>(0)
    const [tankTemperature, setTankTemperature] = useState<number>(0);
    const [tankPh, setTankPh] = useState<number>(0)
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log("ich wurde aufgerufen")
    };

    function onChangeHandlerSetTankName(e: ChangeEvent<HTMLInputElement>) {
        setTankName(e.target.value)
    }

    function onChangeHandlerSetWaterType(e: ChangeEvent<HTMLInputElement>) {
        setWaterType(e.target.value)
    }

    function onChangeHandlerSetTankSize(e: ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setTankSize(value);
    }

    function onChangeHandlerSetTankPh(e: ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setTankPh(value);
    }

    function onChangeHandlerSetTankTemperature(e: ChangeEvent<HTMLSelectElement>) {
        const value = Number(e.target.value);
        setTankTemperature(value);
    }


    return {
        tankName, setTankName, toggleModal, onChangeHandlerSetTankName,
        waterType, setWaterType, onChangeHandlerSetWaterType,
        tankSize, setTankSize, onChangeHandlerSetTankSize,
        tankTemperature, setTankTemperature, onChangeHandlerSetTankTemperature,
        tankPh, setTankPh, onChangeHandlerSetTankPh,
        modal, setModal
    };
}

export default UseInputValues;