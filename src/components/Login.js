import './Login.css';
import './grid.css';
import logo from '../images/suchi-texto.png';
import help from '../images/help.png';

// import App from '../App';

function Login() {
  //handle para boton de login
  return (
    <div className='grid'>
      <header  className="header-login">
        <img src={logo} className='Login-logo' alt='logo'/>
      </header>
      
      <body  className="body-login">
        <div className ='inputs-login-div'>
         <input className ='userId, inputs-login' placeholder='User ID'></input>
         <input className ='password, inputs-login' placeholder='Password' type = 'password'></input>
        </div>
        <button className='btn-login' >Login</button>
      </body>
      <footer className="footer-login">
       <img src={help} className='help' alt='help'/>
      </footer>
      
    </div>
    // <div className='Login'>
    //   <header className='Login-header'>
    //     <p>
    //       Hola mundo
    //     </p>
    //     <a
    //       className='Login-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Login;
