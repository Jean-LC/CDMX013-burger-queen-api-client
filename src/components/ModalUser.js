import './styles/ModalUser.css';
import { useState } from 'react';


function ModalUser({ show, onClose, onSubmit }) {
    const [newUser, setNewUser] = useState(
        {
            email: '',
            password: '',
            role: ''
        })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newUser)
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
                            onChange={(e) => setNewUser({ ...newUser, role: 'dinner' })} />
                        Dinner Staff
                    </label>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="option"
                            className='radio-button'
                            onChange={() => setNewUser({ ...newUser, role: 'admin' })}
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