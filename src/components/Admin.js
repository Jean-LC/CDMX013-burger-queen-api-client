import './styles/grid.css';
import './styles/Admin.css'
import HeaderGeneral from "./HeaderGeneral.js";
import NavbarAdmin from "./NavbarAdmin.js";

const Admin = ({ userName }) => {
    return (
        <div className="grid">
            <header className='admin-header'>
            <HeaderGeneral section={'ADMIN'} user={'Mena'}/>
            </header>
                <div className='nav-bar-admin'>
                <NavbarAdmin />
                </div>
            <body className='body-admin'>
                <button className="create-user">Create user</button>
            </body>
        </div>
    );
}

export default Admin;