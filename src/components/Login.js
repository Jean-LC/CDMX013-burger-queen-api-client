import './styles/Login.css';
import './styles/grid.css';
import ModalHelp from './ModalHelp';
import logo from '../images/suchi-texto.png';
import help from '../images/help.png';
import { useState } from 'react';
import axios from 'axios';
import useAuth from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export function Login() {

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: values.email,
        password: values.password
      })
      const userLogged = response?.data
      setAuth(userLogged);

      if ((userLogged.user.role === "admin") === true) {
        navigate('/admin')
      }
      if ((userLogged.user.role === "kitchen") === true) {
        navigate('/kitchen');
      }
      if ((userLogged.user.role === "dinner") === true) {
        navigate('/dinner');
      }

    } catch (err) {
      setErrorMessage(err.response.data)

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
            <input className='userId, inputs-login'
              placeholder='Email'
              type='text'
              name='email'
              autoComplete="off"
              onChange={(e) => setValues({ ...values, email: e.target.value })}>
            </input>
            <input className='password, inputs-login'
              placeholder='Password'
              type='password'
              name='password'
              onChange={(e) => setValues({ ...values, password: e.target.value })}>
            </input>
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
