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
                <div>
                    <label className='label-inputs'>
                    <input type="radio" name="option"/>
                    Kitchen Staff
                    </label>
                    <label className='label-inputs'>
                    <input type="radio" name="option"/>
                    Dinner Staff
                    </label>
                    <label className='label-inputs'>
                    <input type="radio" name="option" />
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