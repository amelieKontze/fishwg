import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Gallery from "./pages/Gallery";
import useFish from "./hooks/UseFish";
import Navbar from "./components/Navbar";
import FindFish from "./pages/FindFish";
import MyTanks from "./pages/MyTanks";
import Home from "./pages/Home";

function App() {

    const {getAllFish, fishList} = useFish()

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery  allFish={fishList} getAllFish={getAllFish}/>}/>
        <Route path="/find-fish" element={<FindFish/>}/>
        <Route path="/my-tanks" element={<MyTanks/>}/>
      </Routes>
    </div>

  );
}

export default App;
