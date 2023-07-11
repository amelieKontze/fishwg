import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function UseLogin() {
    const [user, setUser] = useState<string>()
    const navigateTo = useNavigate()

    function login(username: string, password: string) {
        return axios.post("/user/login", undefined, {auth: {username, password}})
            .then((response) => {
                getUsername()
                navigateTo("/")
            }).catch((error) => {
                console.log(error)
            })
    }

    function getUsername() {
        let username = undefined
        axios.get("/user/me")
            .then((response) => {
                setUser(response.data);
                username = response.data
                if (username === "anonymousUser" || username === undefined) {
                    navigateTo("/login")
                }
            }).catch(error => {
            console.log(error)
        })
    }

    function logout() {
        return axios.post("/user/logout")
            .then(() => {
                setUser(undefined);
                navigateTo("/")
            })
    }

    function signUp(name: string, username: string, email: string, password: string): Promise<void> {
        return axios.post("/user/sign-up", {name, username, email, password})
            .then((response) => {
                navigateTo("/login")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return {login, getUsername, user, logout, signUp}
}

export default UseLogin;