import './styles/ModalUser.css';
import { useState, useEffect } from 'react';


function ModalUser({ show, onClose, onSubmit, error, user, setUser }) {

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user)
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
                        required
                        name="email"
                        value={user.email}
                        onChange={handleChange} />
                    <input className='input-password'
                        placeholder='Password'
                        type='password'
                        required
                        name = "password"
                        defaultValue={''}
                        onChange={handleChange} />
                </div>
                <div className='radio-buttons-div'>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="role"
                            className='radio-button'
                            required
                            checked={user.role === 'kitchen'}
                            onChange={(e) => setUser({ ...user, role: 'kitchen' })} />
                        Kitchen Staff
                    </label>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="role"
                            className='radio-button'
                            checked={user.role === 'dinner'}
                            onChange={(e) => setUser({ ...user, role: 'dinner' })} />
                        Dinner Staff
                    </label>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="role"
                            className='radio-button'
                            checked={user.role === 'admin'}
                            onChange={() => setUser({ ...user, role: 'admin' })}
                        />
                        Admin
                    </label>

                </div>
                <p className="error-create" >{error}</p>
                <div className='buttons-modal'>
                    <button className='accept-user' type='submit'> Accept </button>
                    <button className='cancel-user' onClick={onClose} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ModalUser;