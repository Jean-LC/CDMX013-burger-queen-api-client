import './styles/Login.css';
import './styles/grid.css';
import ModalHelp from './ModalHelp';
import logo from '../images/suchi-texto.png';
import help from '../images/help.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


function Login() {
  //Falta la condicional para cuando se pueda autenticar.
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const adminPage = () => {
    navigate('/admin')
  }
  return (
    <div className='grid'>
      <header className="header-login">
        <img src={logo} className='Login-logo' alt='logo' />
      </header>
      <body className="body-login">
        <div className='inputs-login-div'>
          <input className='userId, inputs-login' placeholder='User Name'></input>
          <input className='password, inputs-login' placeholder='Password' type='password'></input>
        </div>
        <button className='btn-login' onClick={adminPage}>Login</button>
      </body>
      <footer className="footer-login">
        <img src={help} className='help' alt='help' onClick={() => setShow(true)} />
        <ModalHelp onClose={() => setShow(false)} show={show}/>
      </footer>
    </div>
  );
}

export default Login;
