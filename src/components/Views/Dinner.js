import '../styles/grid.css';
import '../styles/Admin.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';


const Dinner = () => {
    const {auth} = useAuth()
    return (
        <article className= "grid">
            <header className='admin-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
        
        </article>
    )
}

export default Dinner