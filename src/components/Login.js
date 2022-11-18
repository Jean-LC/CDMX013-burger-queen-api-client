import './styles/Login.css';
import './styles/grid.css';
import ModalHelp from './ModalHelp';
import logo from '../images/suchi-texto.png';
import help from '../images/help.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Login() {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  let userLogged = [];

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/login', {
      email: values.email,
      password: values.password
    })
      .then((response) => {
        userLogged.push(response.data);
      })
      .catch((error) => setErrorMessage(error.response.data));

    if (userLogged.map((res) => res.user.role === "admin")[0] === true) {
      navigate('/admin')
    }
  }

  return (
    <div className='grid'>
      <header className='header-login'>
        <img src={logo} className='Login-logo' alt='logo' />
      </header>
      <section className='body-login'>
        <form onSubmit={handleLoginSubmit}>
          <div className='inputs-login-div'>
            <input className='userId, inputs-login' placeholder='Email' type='text' name='email' onChange={(e) => setValues({ ...values, email: e.target.value })}></input>
            <input className='password, inputs-login' placeholder='Password' type='password' name='password' onChange={(e) => setValues({ ...values, password: e.target.value })}></input>
            <p className='paragraph-error'> {errorMessage} </p>
          </div>
          <button className='btn-login' type='submit' >Login</button>
        </form>
      </section>
      <footer className='footer-login'>
        <img src={help} className='help' alt='help' onClick={() => setShow(true)} />
        <ModalHelp onClose={() => setShow(false)} show={show} />
      </footer>
    </div>
  );
}

export default Login;
