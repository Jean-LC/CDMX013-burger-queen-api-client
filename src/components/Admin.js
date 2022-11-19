import { useState } from 'react';
import './styles/grid.css';
import './styles/Admin.css'
import HeaderGeneral from "./HeaderGeneral.js";
import NavbarAdmin from "./NavbarAdmin.js";
/* import { userLogged } from './Login.js'; */
import ModalUser from './ModalUser.js';

const Admin = () => {
const [show, setShow] = useState(false);
// ¿Queremos que la App/admin no aparezca cuando refresquen la pag?
        return (
            <div className="grid">
                <header className='admin-header'>
                <HeaderGeneral section={'ADMIN'} email={/* userLogged.user.email */ "mena"}/>
                </header>
                    <div className='nav-bar-admin'>
                    <NavbarAdmin />
                    </div>
                <section className='body-admin'>
                    <button className="create-user" onClick={() => setShow(true)}>Create user</button>
                    <ModalUser onClose={() => setShow(false)} show={show}/>
                </section>
            </div>
        );
}

export default Admin;