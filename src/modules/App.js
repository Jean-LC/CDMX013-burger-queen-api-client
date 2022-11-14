import '../App.css';
import logo from '../images/suchi-texto.png';
import help from '../images/help.png';
function App() {
  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo'/>
      <input className ='userId'></input>
      <input className ='password' type = 'password'></input>
      <button className='btn-login'>Login</button>
      <img src={help} className='help' alt='help'/>
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <p>
    //       Hola mundo
    //     </p>
    //     <a
    //       className='App-link'
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

export default App;
