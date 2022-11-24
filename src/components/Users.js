import './styles/Users.css';
/* import useAuth from "../hook/useAuth";
import { useEffect, useState } from 'react';
import { getUsers, deleteUsers } from '../services/api'; */
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg.png';

const Users = ({users}) => {

    // eventualmente vivira en Admin
    const hadleDltUsers = async (userId) => {
        console.log(userId)
       /*  try {
            const dlt = await deleteUsers(userId, auth.accessToken);
            console.log('dlt', dlt)
            const newData = dataUser.filter((item) => item.id !== userId)

            console.log("funciona?", newData)
            setDataUser(newData)

        } catch (err) {
            console.log(err)
        } */
    }

    return (
        <>
            {users.map((user) => (
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