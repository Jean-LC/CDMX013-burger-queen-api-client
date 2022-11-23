import './styles/Users.css';
import useAuth from "../hook/useAuth";
import { useEffect, useState } from 'react';
import { getUsers, deleteUsers } from '../services/api';
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg.png';

const Users = () => {
    const { auth } = useAuth();
    const [dataUser, setDataUser] = useState([]);

    const readUser = async () => {
        try {
            const { data } = await getUsers(auth.accessToken)
            setDataUser(data)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }
    
    const hadleDltUsers = async (userId) => {
        try {
            const dlt = await deleteUsers(userId, auth.accessToken);
            console.log('dlt', dlt)
            const newData = dataUser.filter((item) => item.id !== userId)

            console.log("funciona?", newData)
            setDataUser(newData)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        readUser()
    },)

    return (
        <>
            {dataUser.map((user) => (
                <div className="div-users" key={user.id}>
                    <p className='p-user-content'>{user.role.toUpperCase()}</p>
                    <p className='p-user-content'>{user.email}</p>
                    <img src={edit} className='edit-button'
                        alt='edit-button'>
                    </img>
                    <img src={deleteImg}
                        className='delete-image'
                        alt='delete'
                        id={user.id}
                        onClick={() => hadleDltUsers(user.id)}
                    >
                    </img>
                </div>
            ))}
        </>
    )
}

export default Users;