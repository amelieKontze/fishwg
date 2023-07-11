import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import useFish from "./hooks/UseFish";
import Navbar from "./components/Navbar";
import FishGallery from "./pages/FishGallery";
import MyTanks from "./pages/MyTanks";
import Home from "./pages/Home";
import useTank from "./hooks/UseTank";
import AddTank from "./components/AddTank";
import TankDetailsCard from "./components/TankDetailsCard";
import UpdateTank from "./components/UpdateTank";
import Login from "./security/Login";
import useLogin from "./security/UseLogin";
import ProtectedRoutes from "./security/ProtectedRoutes";
import SignUp from "./components/SignUp";


function App() {

    useEffect(() => {
        getAllFish()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => getUsername,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const {login, user, getUsername, logout, signUp} = useLogin()
    const {getAllFish, fishList} = useFish()
    const {getAllTanks, tankList} = useTank()

    return (
        <div className="App">
            <Navbar logout={logout} user={user}/>
            <Routes>
                <Route path={"/login"} element={<Login login={login}/>}/>
                <Route path={"/sign-up"} element={<SignUp signUp={signUp}/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/fish-gallery" element={<FishGallery allFish={fishList} getAllFish={getAllFish}/>}/>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/my-tanks"
                           element={<MyTanks allTanks={tankList} getAllTanks={getAllTanks} user={user ?? ''}/>}/>
                    <Route path="/new-tank"
                           element={<AddTank getAllTanks={getAllTanks} allFish={fishList} getAllFish={getAllFish}
                                             user={user ?? ''}/>}/>
                    <Route path="/my-tanks/:id" element={<TankDetailsCard allTanks={tankList}/>}/>
                    <Route path="/update-tank/:id"
                           element={<UpdateTank allFish={fishList} tank={tankList} getAllFish={getAllFish}/>}/>
                </Route>
            </Routes>
        </div>

  );
}

export default App;
