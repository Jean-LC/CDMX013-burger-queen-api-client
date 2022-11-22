import './styles/Users.css';
import useAuth from "../hook/useAuth";
import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg.png';

const Users = () => {
    const { auth } = useAuth();
    const [data, setData] = useState([]);
    const readUser = async () => {
        try {
            const {data} = await getUsers(auth.accessToken) 
            setData(data)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        readUser()
    }, [])

    return (
        <>
            {data.map((user) => (
                <div className="div-users" key={user.id}>
                    <p >{user.role}   {user.email}</p> 
                    <img src={edit} className='edit-button' alt='edit-button'></img>
                    <img src={deleteImg} className='delete-image' alt='delete-image'></img>
                </div>
            ))}
        </>
    )
}

export default Users;