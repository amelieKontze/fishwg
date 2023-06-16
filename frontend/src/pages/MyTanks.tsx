import React, {ChangeEventHandler, useEffect, useState} from 'react';
import TankCard from "../components/TankCard";
import {Tank} from "../model/TankModel";
import "../stylesheets/MyTanks.css"
import AddTank from "../components/AddTank";

type Props= {
    getAllTanks: () => void
    allTanks: Tank[]
}
function MyTanks(props:Props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        props.getAllTanks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
        <button onClick={toggleModal} className="btn-modal">Add Tank</button>
          <div className="tanks">
              {props.allTanks.map(tank => <TankCard key={tank.id} tank={tank}/>)}
          </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <AddTank getAllTanks={props.getAllTanks}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyTanks;