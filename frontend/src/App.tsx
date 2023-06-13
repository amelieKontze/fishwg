import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Gallery from "./pages/Gallery";
import useFish from "./hooks/UseFish";

function App() {

    const {getAllFish, fishList} = useFish()

  return (
    <div className="App">
      <Routes>
        <Route path="/fish" element={<Gallery  allFish={fishList} getAllFish={getAllFish}/>}/>
      </Routes>
    </div>

  );
}

export default App;
