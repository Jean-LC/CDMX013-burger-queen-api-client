import '../styles/grid.css';
import '../styles/DinnerDelivered.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';


const DinnerDelivered = () => {
    const {auth} = useAuth()
    return (
        <article className= "grid">
            <header className='dinner-delivered-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
            <div className='nav-bar-dinner'>
            <NavBarDinner />
            </div>
            <p>Dinner delivered en construcción</p>
        
        </article>
    )
}

export default DinnerDelivered