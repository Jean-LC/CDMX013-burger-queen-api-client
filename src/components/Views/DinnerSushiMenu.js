import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';


const Dinner = () => {
    const {auth} = useAuth()
    return (
        <article className= "grid">
            <header className='dinner-sushi-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
            <div className='nav-bar-dinner'>
            <NavBarDinner />
            </div>
            <main></main>
        
        </article>
    )
}

export default Dinner