import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Gallery from "./pages/Gallery";
import useFish from "./hooks/UseFish";
import Navbar from "./components/Navbar";
import FindFish from "./pages/FindFish";
import MyTanks from "./pages/MyTanks";
import Home from "./pages/Home";
import useTank from "./hooks/UseTank";
import AddTank from "./components/AddTank";
import TankDetailsCard from "./components/TankDetailsCard";


function App() {

    useEffect(() => {
        getAllFish()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {getAllFish, fishList} = useFish()
    const {getAllTanks, tankList} = useTank()

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery allFish={fishList} getAllFish={getAllFish}/>}/>
                <Route path="/find-fish" element={<FindFish allFish={fishList} getAllFish={getAllFish}/>}/>
                <Route path="/my-tanks" element={<MyTanks allTanks={tankList} getAllTanks={getAllTanks}/>}/>
                <Route path="/new-tank"
                       element={<AddTank getAllTanks={getAllTanks} allFish={fishList} getAllFish={getAllFish}/>}/>
                <Route path="/my-tanks/:id" element={<TankDetailsCard allTanks={tankList}/>}/>
            </Routes>
        </div>

  );
}

export default App;
