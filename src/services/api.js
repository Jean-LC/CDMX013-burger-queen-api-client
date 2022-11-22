import axios from "axios";

const BASE_URL = 'http://localhost:8080'

export const getUsers = (token) => {
    return axios.get(`${BASE_URL}/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    );

}