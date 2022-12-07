import { useState, useEffect } from 'react';
import '../styles/grid.css';
import '../styles/Admin.css'
import HeaderGeneral from "../HeaderGeneral.js";
import NavbarAdmin from "../NavbarAdmin.js";
import useAuth from "../../hook/useAuth.js";
import ModalProducts from '../ModalProducts.js';
import Products from '../Products';
import { axiosGet, axiosPost, axiosDelete, axiosPatch } from '../../services/api';

const ProductAdmin = () => {
    const [show, setShow] = useState(false);
    const { auth } = useAuth();
    const [dataProduct, setDataProduct] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [oneProduct, setOneProduct] = useState({
        "name": '',
        "price": '',
        "type": '',
        "dataEntry": Date()
    })

    const URL_PRODUCTS = '/products'

    const readProducts = async () => {
        try {
            const { data } = await axiosGet(auth.accessToken, URL_PRODUCTS)
            setDataProduct(data)
        }
        catch (err) {
            console.log(err.response.data)
        }
    }

    const addProduct = async (newProduct) => {
        try {
            await axiosPost(newProduct, URL_PRODUCTS, auth.accessToken);
            readProducts();
            setShow(false)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage(err.response.data)
        }
    }

    const hadleDltProducts = async (productId) => {
        try {
            await axiosDelete(productId, auth.accessToken, URL_PRODUCTS);
            const newData = dataProduct.filter((item) => item.id !== productId)

            setDataProduct(newData)

        } catch (err) {
            console.log(err)
        }
    }

    const editProduct = async (id) => {
        try {
            setOneProduct((await axiosGet(auth.accessToken, `${URL_PRODUCTS}/${id}`)).data);
            setShow(true)
        } catch (err) {
            console.log(err)
        }
    }

        // params(id, token, body, url)
    const patchProduct = async () => {
        try{
            await axiosPatch(URL_PRODUCTS, oneProduct.id, auth.accessToken, oneProduct)
            readProducts();
            setShow(false)
            setErrorMessage('')
            setOneProduct({
                'name': '',
                'price': 0,
                'type': '',
                'dataEntry': Date().toString()
            })

        }catch (err) {
            setErrorMessage(err.response.data)
    }
}

    useEffect(() => {
        readProducts()
    }, [])

    return (
        <div className="grid">
            <header className='admin-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-admin'>
                <NavbarAdmin />
            </div>
            <div className='button-create-user'>
                <button className="create-user" onClick={() => setShow(true)}>Create product</button>
            </div>
            <section className='body-admin'>
                <ModalProducts onClose={() => {
                    setShow(false)
                    setErrorMessage('')
                    setOneProduct({
                        'name': '',
                        'price': '',
                        'type': '',
                    })
                }}
                    show={show}
                    onSubmit={!oneProduct.id ? addProduct : patchProduct} 
                    error={errorMessage}
                    product={oneProduct} 
                    setProduct={setOneProduct}
                    />
                <div className='users-rendering'>
                    <Products products={dataProduct} handleDelete={hadleDltProducts} handleProduct={editProduct} />
                </div>
            </section>
        </div>
    );
}

export default ProductAdmin;