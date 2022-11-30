import { NavLink } from "react-router-dom";
import './styles/NavBarDinner.css';

const NavBarDinner = () => {
    return(
        <nav className="nav-bar-dinner">
            <div className="nav-bar-dinner-container">
                <NavLink to='/dinner' activeclassname="active" className="sushi-bar dinner-link" >Sushi Menu</NavLink>
                <NavLink to='/dinner-open-bar' activeclassname="active" className="sushi-bar dinner-link">Open Bar</NavLink>
                <NavLink to='/dinner-status' activeclassname="active" className="status-delivered dinner-link">Status</NavLink>
                <NavLink to='/dinner-delivered' activeclassname="active" className="status-delivered dinner-link">Delivered</NavLink>
            </div>
        </nav>
    )
}

export default NavBarDinner;