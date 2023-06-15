import React, {useState} from 'react';
import axios from "axios";
import {Tank} from "../model/TankModel";

function UseTank() {

    const [tankList, setAllTanks] = useState<Tank[]>([])

    function getAllTanks() {
        axios.get("/tanks")
            .then((response) => {
                setAllTanks(response.data)
            })
    }

    return {getAllTanks, tankList};
}

export default UseTank;