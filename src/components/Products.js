import './styles/Users.css';
import { useState } from 'react';
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg-black.png';
import ModalDelete from './ModalDelete';

const Product = ({products, handleDelete, handleProduct}) => {
    const [show, setShow] = useState(false);
    const [activeId, setActiveId] = useState('')

    const fnDelete = () => {
        handleDelete(activeId)
        setShow(false)
    }

    return (
        <>
            {products.map((product) => (
                <div className="div-users" key={product.id}>
                    <p className='p-user-content'>{product.type.toUpperCase()}</p>
                    <p className='p-user-content'>{product.name}</p>
                    <p className='p-user-content'>$ {product.price}</p>
                    <img src={edit} className='edit-button'
                        alt='edit-button'
                        id={product.id}
                        onClick={() => {
                            handleProduct(product.id)
                        }}
                    >
                    </img>
                    <img src={deleteImg}
                        className='delete-image'
                        alt='delete'
                        id={product.id}
                        onClick={() => {
                            setActiveId(product.id)
                            setShow(true)
                        }}
                    >
                    </img>
                </div>
            ))}
            <ModalDelete deleteHandle={fnDelete} show={show} onClose={() => setShow(false)} />
        </>
    );
}
export default Product;