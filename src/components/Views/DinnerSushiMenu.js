import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import {axiosGet} from '../../services/api';

const Dinner = () => {
    const { auth } = useAuth()

    const URL_USERS = '/products'
    return (
        <article className="grid">
            <header className='dinner-sushi-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-dinner'>
                <NavBarDinner />
            </div>
            <article className='products'>
                <div className='products-grid'>
                    <input type='text' className='input-client' placeholder='client' name='client' required></input>
                    <p></p>
                </div>

            </article>
            <article className='ticket'>
                <button className='send-kitchen-button'>Send to Kitchen</button>

            </article>

        </article>
    )
}

export default Dinner