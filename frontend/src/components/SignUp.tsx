import React, {ChangeEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../stylesheets/SignUp.css"
import axios from "axios";

function SignUp() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate()

    const onChangeHandlerSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeHandlerSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onChangeHandlerSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onChangeHandlerSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const signUp = () => {
        const newUser = {
            name: name,
            username: username,
            email: email,
            password: password
        };

        axios.post("/user/sign-up", newUser)
            .then((response) => {
                navigateTo("/login")
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <h1>Sign Up</h1>
            <div>
                <input className="input-text-field" placeholder={"Name"} type="text" value={name}
                       onChange={onChangeHandlerSetName}/>
                <br/>
                <input className="input-text-field" placeholder={"Username"} type="text" value={username}
                       onChange={onChangeHandlerSetUsername}/>
                <br/>
                <input className="input-text-field" placeholder={"Email"} type="text" value={email}
                       onChange={onChangeHandlerSetEmail}/>
                <br/>
                <input className="input-text-field" placeholder={"Password"} type="password" value={password}
                       onChange={onChangeHandlerSetPassword}/>
                <button className="button" onClick={signUp}>Sign up</button>
                <br/>
                <Link to="/login" className="link">Login</Link>
            </div>
        </div>
    );
}

export default SignUp;