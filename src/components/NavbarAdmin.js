import './styles/NavbarAdmin.css';
import {NavLink} from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <nav className='navbar-admin'>
            <div className='navbar-admin-content'>
                <NavLink to='/admin' activeClassName='active' className='user-management'>User management</NavLink>
                <NavLink to='/product-management' activeClassName='active' className='product-management'>Product management</NavLink>
            </div>
        </nav>
    )
}

export default NavbarAdmin;