import React, {ChangeEvent, useState} from 'react';
import {Link} from "react-router-dom";
import "../stylesheets/SignUp.css"

type Props = {
    signUp: (name: string, username: string, email: string, password: string) => Promise<void>
}

function SignUp(props: Props) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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


    function onChangeHandlerSignUp() {
        props.signUp(name, username, email, password)
    }

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
                <button className="button" onClick={onChangeHandlerSignUp}>Sign up</button>
                <br/>
                <Link to="/login" className="link">Login</Link>
            </div>
        </div>
    );
}

export default SignUp;