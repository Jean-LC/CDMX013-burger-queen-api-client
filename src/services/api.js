import axios from "axios";
//Notación para usar como constante Rutas
const BASE_URL = 'http://localhost:8080';

export const axiosPost = (body, url, token) => {
    return axios.post(`${BASE_URL}${url}`, body,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const axiosGet = (token, url) => {
    return axios.get(`${BASE_URL}${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const axiosDelete = (id, token, url) => {
    return axios.delete(`${BASE_URL}${url}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            id: id
        }
    })
}

export const axiosPatch = (url, id, token, body) => {
    return axios.patch(`${BASE_URL}${url}/${id}`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}


