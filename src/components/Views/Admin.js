import { useState, useEffect } from 'react';
import '../styles/grid.css';
import '../styles/Admin.css'
import HeaderGeneral from "../HeaderGeneral.js";
import NavbarAdmin from "../NavbarAdmin.js";
import useAuth from "../../hook/useAuth.js";
import ModalUser from '../ModalUser.js';
import Users from '../Users';
import { axiosGet, axiosPost, axiosDelete, axiosPatch } from '../../services/api';

const Admin = () => {
    const [show, setShow] = useState(false);
    const { auth } = useAuth();
    const [dataUser, setDataUser] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [oneUser, setOneUser] = useState({
        email: '',
        role: ''
    })
    const URL_USERS = '/users'

    const readUser = async () => {
        try {
            const { data } = await axiosGet(auth.accessToken, URL_USERS)
            setDataUser(data)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }

    const addUser = async (newUser) => {
        try {
            await axiosPost(newUser, URL_USERS);
            readUser();
            setShow(false)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage(err.response.data)
        }
    }

    const hadleDltUsers = async (userId) => {
        try {
            await axiosDelete(userId, auth.accessToken, URL_USERS);
            const newData = dataUser.filter((item) => item.id !== userId)

            setDataUser(newData)

        } catch (err) {
            console.log(err)
        }
    }

    const editUser = async (id) => {
        try {
            setOneUser((await axiosGet(auth.accessToken, `${URL_USERS}/${id}`)).data);
            setShow(true)
        } catch (err) {
            console.log(err)
        }
    }

        // params(id, token, body, url)
    const patchUser = async () => {
        try{
            const editPatch = await axiosPatch(URL_USERS, oneUser.id, auth.accessToken, oneUser)
            readUser();
            setShow(false)
            setErrorMessage('')
            setOneUser({
                email: '',
                role: ''
            })
            console.log("soy ediiiiiiit", editPatch)

        }catch (err) {
            setErrorMessage(err.response.data)
    }
}

    useEffect(() => {
        readUser()
    }, [])

    return (
        <div className="grid">
            <header className='admin-header'>
                <HeaderGeneral section={'ADMIN'} email={auth.user.email} />
            </header>
            <div className='nav-bar-admin'>
                <NavbarAdmin />
            </div>
            <div className='button-create-user'>
                <button className="create-user" onClick={() => setShow(true)}>Create user</button>
            </div>
            <section className='body-admin'>
                <ModalUser onClose={() => {
                    setShow(false)
                    setErrorMessage('')
                    setOneUser({
                        email: '',
                        role: ''
                    })
                }}
                    show={show}
                    onSubmit={!oneUser.id ? addUser : patchUser} 
                    error={errorMessage}
                    user={oneUser} 
                    setUser={setOneUser}
                    />
                <div className='users-rendering'>
                    <Users users={dataUser} handleDelete={hadleDltUsers} handleUser={editUser} />
                </div>
            </section>
        </div>
    );
}

export default Admin;