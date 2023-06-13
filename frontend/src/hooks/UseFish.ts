import React, {useState} from 'react';
import axios from "axios";
import {Fish} from "../pages/FishModel";


function UseFish() {

    const [fishList, setAllFish] = useState<Fish[]>([])

    function getAllFish() {
        axios.get("/fish")
            .then((response) => {
                setAllFish(response.data)
            }).catch((e) => console.log(e.message))
    }

    return {getAllFish}
}

export default UseFish;