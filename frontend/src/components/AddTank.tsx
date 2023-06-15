import React, {useState} from 'react';
import axios from "axios";
import {Form} from "react-router-dom";

function AddTank() {

    const [tankName, setTankName] = useState<string>("")
    const [waterType, setWaterType] = useState<string>("")
    const [tankSize, setTankSze] = useState<number>(0)
    const [tankTemp, setTankTemü] = useState<number>(0)
    const [residentFish, setResidentFish] = useState<Fish[]>([])



    return (
        <div>
            <Form>
                <label>Name of tank:
                <input type="text" placeholder={}/>
                </label>
            </Form>
        </div>
    );
}







const [inputTankName, setInputTankName] = useState<string>("")

export default AddTank;function addTank() {
    axios.post("/newTank", {tankName: inputTankName})
        .then(getTanks)
    setInputTankName("")
}