import './styles/ModalUser.css';
import useAuth from "../hook/useAuth";
import { useState } from 'react';
import { createUser } from '../services/api';

function ModalUser({ show, onClose }) {
    const { auth } = useAuth();
    const [newUser, setNewUser] = useState(
        {
        email: '',
        password: '',
        role: ''
      })

        const addUser = async () => {
            try{
                console.log('este es newUser', newUser)
            const newUserInfo = await createUser(newUser);
            console.log("soy info 2 ", newUserInfo)

        }catch (err) {
            console.log(err.response.data)
        }
    }
    
const handleSubmit = (e) => {
        e.preventDefault();
        addUser()
        setNewUser('')
        onClose()
    }

    if (!show) {
        return null;
    } return (
        <div className='modal-user' >
            <form className='modal-user-content' onSubmit={handleSubmit}>
                <div className='modal-user-inputs'>
                    <input className='input-email' 
                    placeholder='Email' 
                    type='text' 
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    <input className='input-password' 
                    placeholder='Password' 
                    type='password' 
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                </div>
                <div className='radio-buttons-div'>
                    <label className='label-inputs'>
                        <input type="radio" 
                        name="option" 
                        className='radio-button' 
                        onChange={(e) => setNewUser({ ...newUser, role: 'kitchen' })} />
                        Kitchen Staff
                    </label>
                    <label className='label-inputs'>
                        <input type="radio" 
                        name="option" 
                        className='radio-button' 
                        onChange={(e) => setNewUser({ ...newUser, role: 'dinner' })}/>
                        Dinner Staff
                    </label>
                    <label className='label-inputs'>
                        <input type="radio" 
                        name="option" 
                        className='radio-button' 
                        onChange={(e) => setNewUser({ ...newUser, role: 'admin' })}
                        />
                        Admin
                    </label>

                </div>
                <div className='buttons-modal'>
                    <button className='accept-user' type='submit'> Create user </button>
                    <button className='cancel-user' onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ModalUser;