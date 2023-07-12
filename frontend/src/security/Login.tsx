import React, {ChangeEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../stylesheets/Login.css"

type Props = {
    login: (username: string, password: string) => Promise<void>
}

function Login(props: Props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate()

    function login() {
        props.login(username, password)
            .then(() => {
                    navigateTo("/")
                    console.log(username)
                }
            ).catch((error) => {
            console.log("Couldn't log in")
        })
    }

    function onChangeHandlerUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <div className="login">
            <img className="login-logo" src="/FishWGLogo.png"/>
            <h1>Login</h1>
            <div>
                <input className="input-text-field" placeholder="Username" type="text" value={username}
                       onChange={onChangeHandlerUsername}/>
                <br/>
                <input className="input-text-field" placeholder="Password" type="password" value={password}
                       onChange={onChangeHandlerPassword}/>
                <button className="button" onClick={login}>Login</button>
                <br/>
                <Link to="/sign-up" className="link">Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;