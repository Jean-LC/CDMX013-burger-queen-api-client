import './styles/grid.css'
import './styles/HeaderGeneral.css'
import logo from '../images/suchi-img.png'
import exit from '../images/exit.png'

const HeaderGeneral = ({userName, section}) => {
    return (
        <div className='header-general'>
                <img src={logo} alt="logo" className='suchi-image'></img>
                <div className='general-p'>
                <p className='general-title-header'>{section}</p>
                <p className='general-user-header'>User:{userName}</p>
                </div>
                <img src={exit} alt="exit" className='exit-image'></img>
        </div>
    )
}

export default HeaderGeneral;