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
import UpdateTank from "./components/UpdateTank";
import Login from "./security/Login";
import useLogin from "./security/UseLogin";
import ProtectedRoutes from "./security/ProtectedRoutes";


function App() {

    useEffect(() => {
        getAllFish()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => getUsername,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const {login, user, getUsername, logout} = useLogin()
    const {getAllFish, fishList} = useFish()
    const {getAllTanks, tankList} = useTank()

    return (
        <div className="App">
            <Navbar logout={logout}/>
            <Routes>
                <Route path={"/login"} element={<Login login={login}/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery allFish={fishList} getAllFish={getAllFish}/>}/>
                <Route path="/find-fish" element={<FindFish allFish={fishList} getAllFish={getAllFish}/>}/>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/my-tanks" element={<MyTanks allTanks={tankList} getAllTanks={getAllTanks}/>}/>
                    <Route path="/new-tank"
                           element={<AddTank getAllTanks={getAllTanks} allFish={fishList} getAllFish={getAllFish}/>}/>
                    <Route path="/my-tanks/:id" element={<TankDetailsCard allTanks={tankList}/>}/>
                    <Route path="/update-tank/:id"
                           element={<UpdateTank allFish={fishList} tank={tankList} getAllFish={getAllFish}/>}/>
                </Route>
            </Routes>
        </div>

  );
}

export default App;
