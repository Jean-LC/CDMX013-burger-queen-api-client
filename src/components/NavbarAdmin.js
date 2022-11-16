import './styles/NavbarAdmin.css';

const NavbarAdmin = () => {
    return (
        <navbar className='navbar-admin'>
            <div className='navbar-admin-content'>
                 <button className='user-management'>User management</button>
                 <button className='product-management'>Product management</button>
            </div>
        </navbar>
    )
}

export default NavbarAdmin;