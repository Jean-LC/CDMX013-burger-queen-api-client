import './styles/NavbarAdmin.css';
import {NavLink} from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <nav className='navbar-admin'>
            <div className='navbar-admin-content'>
                <NavLink to='/admin' activeclassname='active' className='user-management'>User management</NavLink>
                <NavLink to='/product-management' activeclassname='active' className='product-management'>Product management</NavLink>
            </div>
        </nav>
    )
}

export default NavbarAdmin;