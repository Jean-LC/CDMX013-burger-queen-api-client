import './styles/ModalUser.css';

function ModalUser({ show, onClose }) {
    if (!show) {
        return null;
    }
    return (
        <div className='modal-user' >
            <form className='modal-user-content'>
                <div className='modal-user-inputs'>
                    <input className='input-email' placeholder='Email' type='text' />
                    <input className='input-password' placeholder='Password' type='password' />
                </div>
                <div className='radio-buttons-div'>
                    <label className='label-inputs'>
                    <input type="radio" name="option" className='radio-button'/>
                    Kitchen Staff
                    </label>
                    <label className='label-inputs'>
                    <input type="radio" name="option" className='radio-button'/>
                    Dinner Staff
                    </label>
                    <label className='label-inputs'>
                    <input type="radio" name="option" className='radio-button'/>
                    Admin
                    </label>

                </div>
                <div className='buttons-modal'>
                    <button className='accept-user' onClick={onClose}> Create user </button>
                    <button className='cancel-user' onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ModalUser;