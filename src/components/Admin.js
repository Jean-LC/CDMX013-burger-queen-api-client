import { useState, useEffect } from 'react';
import './styles/grid.css';
import './styles/Admin.css'
import HeaderGeneral from "./HeaderGeneral.js";
import NavbarAdmin from "./NavbarAdmin.js";
import useAuth from "../hook/useAuth.js";
import ModalUser from './ModalUser.js';
import Users from './Users';
import { getUsers, createUser } from '../services/api';

const Admin = () => {
    const [show, setShow] = useState(false);
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

    const addUser = async (newUser) => {
        try {
            await createUser(newUser);
            readUser();

        } catch (err) {
            console.log(err.response.data)
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
                <ModalUser onClose={() => setShow(false)} show={show} onSubmit={addUser}/>
                <div className='users-rendering'>
                    <Users users={dataUser} />
                </div>
            </section>
        </div>
    );
}

export default Admin;