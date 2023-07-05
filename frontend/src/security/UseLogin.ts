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
                } else navigateTo("/")
            }).catch(error => {
            console.log(error)
        })
    }

    return {login, getUsername, user}
}

export default UseLogin;