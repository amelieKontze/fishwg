import React, {useState} from 'react';
import axios from "axios";
import {Tank} from "../model/TankModel";

function UseTank() {

    const [tankList, setAllTanks] = useState<Tank[]>([])

    function getAllTanks() {
        axios.get("/my-tanks")
            .then((response) => {
                setAllTanks(response.data)
            }).catch((e) => console.log(e.message))
    }

    return {getAllTanks, tankList};
}

export default UseTank;