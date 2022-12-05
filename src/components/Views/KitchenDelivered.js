import HeaderGeneral from '../HeaderGeneral.js';
import useAuth from '../../hook/useAuth';
import NavBarKitchen from '../NavBarKitchen.js';
import suchihappy from '../../images/suchi-happy.png';

const KitchenDelivered = () => {
    const { auth } = useAuth()
    
    return (
        <section className='grid'>
            <header className='kitchen-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-kitchen'>
                <NavBarKitchen/>
            </div>
            <img src={suchihappy} alt="sushito-happy" className="suchito-happy"></img>
            <p>Under construction</p>
        </section>
    );
}

export default KitchenDelivered;