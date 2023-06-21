import {useState} from 'react';
import axios from "axios";
import {Fish} from "../model/FishModel";

function UseFish() {

    const [fishList, setAllFish] = useState<Fish[]>([])

    function getAllFish() {
        axios.get("/api/fish")
            .then((response) => {
                setAllFish(response.data)
            }).catch((e) => console.log(e.message))
    }

    return {getAllFish, fishList}
}

export default UseFish;