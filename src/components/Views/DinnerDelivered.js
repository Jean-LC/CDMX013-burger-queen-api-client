import '../styles/grid.css';
import '../styles/DinnerDelivered.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import suchihappy from '../../images/suchi-happy.png'


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

            <img src={suchihappy} alt="sushito-happy" className="suchito-happy"></img>
            <p>Under construction</p>
        
        </article>
    )
}

export default DinnerDelivered