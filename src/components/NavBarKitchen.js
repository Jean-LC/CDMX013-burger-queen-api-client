import { NavLink } from "react-router-dom";
import './styles/NavBarKitchen.css';

const NavBarKitchen = () => {
    return(
        <nav className="nav-bar-kitchen">
            <div className="nav-bar-kitchen-container">
                <NavLink to='/kitchen' activeclassname="active" className="kitchen-link" >Pending</NavLink>
                <NavLink to='/kitchen-delivered' activeclassname="active" className="kitchen-link">Delivered</NavLink>
            </div>
        </nav>
    )
}

export default NavBarKitchen;