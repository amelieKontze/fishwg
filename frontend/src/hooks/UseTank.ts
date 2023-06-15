import React, {useState} from 'react';
import axios from "axios";
import {Tank} from "../model/TankModel";

function UseTank() {

    const [inputTankName, setInputTankName] = useState<string>("")
    const [tankList, setAllTanks] = useState<Tank[]>([])

    function addTank() {
        axios.post("/newTank", {tankName: inputTankName})
            .then(getTanks)
        setInputTankName("")
    }

    function getTanks() {
        axios.get("/tanks")
            .then((response) => {
                setAllTanks(response.data)
            }).catch((e) => console.log.(e.message))
    }

    return {addTank, tankList};
}

export default UseTank;