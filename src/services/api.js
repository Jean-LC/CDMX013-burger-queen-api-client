import axios from "axios";

const BASE_URL = 'http://localhost:8080'

export const loginUser =  (userEmail, userPassword) => {
    return  axios.post( `${BASE_URL}/login`, {
    email: userEmail,
    password: userPassword
  })
}

export const getUsers = (token) => {
    return axios.get(`${BASE_URL}/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const deleteUsers = (id, token) => {
    return axios.delete(`${BASE_URL}/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
       data: {
        id: id
       }
    })
}