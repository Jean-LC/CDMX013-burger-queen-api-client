import './styles/Users.css';
import useAuth from "../hook/useAuth";
import { useEffect, useState } from 'react';
import { getUsers, deleteUsers } from '../services/api';
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg.png';

const Users = () => {
    const { auth } = useAuth();
    const [data, setData] = useState([]);
    // const [userDelete, setUserDelete] = useState([])}

    const readUser = async () => {
        try {
            const { data } = await getUsers(auth.accessToken)
            setData(data)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }
    const dltUsers = async (userId) => {
        try {
            const dlt = await deleteUsers(userId, auth.accessToken)
            console.log(setData(data.filter((user) => user.id !== userId)))

        } catch (err) {

        }
    }

    useEffect(() => {
        readUser()
    }, [])

/*      useEffect(() =>{
        dltUsers(data.id)
    }, [])  */

    return (
        <>
            {data.map((user) => (
                <div className="div-users" key={user.id}>
                    <p >{user.role}</p> 
                    <p>{user.email}</p>
                    <img src={edit} className='edit-button'
                        alt='edit-button'>
                    </img>
                    <img src={deleteImg}
                        className='delete-image'
                        alt='delete-image'
                        id={user.id}
                        onClick={() => dltUsers(user.id)}
                        /* onChange={() => setData(dltUsers)} */
                    >
                    </img>
                </div>
            ))}
        </>
    )
}

export default Users;