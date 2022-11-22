import './styles/grid.css'
import './styles/HeaderGeneral.css'
import logo from '../images/suchi-img.png'
import exit from '../images/exit.png'
import useAuth from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';


const HeaderGeneral = ({email, section}) => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = () =>{
        setAuth({});
        navigate('/');
    }
    return (
        <div className='header-general'>
                <img src={logo} alt="logo" className='suchi-image'></img>
                <div className='general-p'>
                <p className='general-title-header'>{section}</p>
                <p className='general-user-header'>User: {email}</p>
                </div>
                <img src={exit} alt="exit" className='exit-image' onClick={logout}></img>
        </div>
    )
}

export default HeaderGeneral;