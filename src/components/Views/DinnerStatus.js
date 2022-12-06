import '../styles/grid.css';
import '../styles/DinnerStatus.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';

const DinnerStatus = () => {
    const {auth} = useAuth()
    return (
        <article className= "grid">
            <header className='dinner-status-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
            <div className='nav-bar-dinner'>
            <NavBarDinner />
            </div>
            

        </article>
    )
}

export default DinnerStatus