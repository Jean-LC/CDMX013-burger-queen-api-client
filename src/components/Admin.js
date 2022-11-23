import { useState } from 'react';
import './styles/grid.css';
import './styles/Admin.css'
import HeaderGeneral from "./HeaderGeneral.js";
import NavbarAdmin from "./NavbarAdmin.js";
import useAuth from "../hook/useAuth";
import ModalUser from './ModalUser.js';
// import axios from 'axios';
import Users from './Users';

const Admin = () => {
const [show, setShow] = useState(false);
const { auth } = useAuth();
// ¿Queremos que la App/admin no aparezca cuando refresquen la pag?
        return (
            <div className="grid">
                <header className='admin-header'>
                <HeaderGeneral section={'ADMIN'} email={auth.user.email}/>
                </header>
                    <div className='nav-bar-admin'>
                    <NavbarAdmin />
                    </div>
                    <div className='button-create-user'>
                    <button className="create-user" onClick={() => setShow(true)}>Create user</button>
                    </div>
                <section className='body-admin'>
                    <ModalUser onClose={() => setShow(false)} show={show}/>
                    <div className='users-rendering'>
                        <Users />
                    </div>
                </section>
            </div>
        );
}

export default Admin;