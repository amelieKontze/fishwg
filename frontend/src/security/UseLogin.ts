import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function UseLogin() {
    const [user, setUsername] = useState<string>()
    const navigateTo = useNavigate()

    function login(username: string, password: string) {
        return axios.post("api/user/login", undefined, {auth: {username, password}})
            .then((response) => {
                getUsername()
            })
    }

    function getUsername() {
        let username = undefined
        axios.get("api/user/me")
            .then((response) => {
                setUsername(response.data);
                username = response.data
                if (username === "anonymousUser" || username === undefined) {
                    navigateTo("/login")
                } else navigateTo("/")
            })
    }

    return {login, getUsername, user}
}

export default UseLogin;