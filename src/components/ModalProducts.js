import './styles/ModalUser.css';

function ModalProducts({ show, onClose, onSubmit, error, product, setProduct }) {

    const handleChangeName = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product)
    }

    if (!show) {
        return null;
    } return (
        <div className='modal-user' >
            <form className='modal-user-content' onSubmit={handleSubmit}>
                <div className='modal-user-inputs'>
                    <input className='input-email'
                        placeholder='Product name'
                        type='text'
                        required
                        name="name"
                        value={product.name}
                        onChange={handleChangeName} />
                    <input className='input-password'
                        placeholder='Price'
                        type='number'
                        name = 'price'
                        value={product.price}
                        onChange={handleChangeName} />
                </div>
                <div className='radio-buttons-div'>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="type"
                            className='radio-button'
                            required
                            checked={product.type === 'Sushi menu'}
                            onChange={(e) => setProduct({ ...product, type: 'Sushi menu' })} />
                        Sushi menu
                    </label>
                    <label className='label-inputs'>
                        <input type="radio"
                            name="type"
                            className='radio-button'
                            checked={product.type === 'Open bar'}
                            onChange={(e) => setProduct({ ...product, type: 'Open bar' })} />
                        Open bar
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

export default ModalProducts;