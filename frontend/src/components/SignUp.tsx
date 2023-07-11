import React, {ChangeEvent, FormEvent, useState} from 'react';
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
    const [error, setError] = useState('');

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

    const onChangeHandlerSignUp = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (name.trim() === '') {
            setError('Name must not be empty.');
            return;
        }

        if (username.trim() === '') {
            setError('Username must not be empty.');
            return;
        }

        if (!emailRegex.test(email)) {
            setError('Please provide a valid email.');
            return;
        }

        if (password.length < 8) {
            setError('Password should be at least 8 characters long.');
            return;
        }

        setError('');
        props.signUp(name, username, email, password);
    };


    return (
        <div className="login">
            <h1>Sign Up</h1>
            <form>
                <input className="input-text-field" placeholder={"Name"} type="text" value={name}
                       onChange={onChangeHandlerSetName} required/>
                <br/>
                <input className="input-text-field" placeholder={"Username"} type="text" value={username}
                       onChange={onChangeHandlerSetUsername} required/>
                <br/>
                <input className="input-text-field" placeholder={"Email"} type="email" value={email}
                       onChange={onChangeHandlerSetEmail} required/>
                <br/>
                <input className="input-text-field" placeholder={"Password"} type="password" value={password}
                       onChange={onChangeHandlerSetPassword} required/>
                {error && <p className="error-message">{error}</p>}
                <button className="button" onClick={onChangeHandlerSignUp}>Sign up</button>
                <br/>
                <Link to="/login" className="link">Login</Link>
            </form>
        </div>
    );
}

export default SignUp;