import '../styles/grid.css';
import '../styles/DinnerOpenBar.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';


const DinnerOpenBar = () => {
    const {auth} = useAuth()
    return (
        <article className= "grid">
            <header className='dinner-open-bar-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
            <div className='nav-bar-dinner'>
            <NavBarDinner />
            </div>
            <p>Dinner open bar en construcción</p>
        
        </article>
    )
}

export default DinnerOpenBar