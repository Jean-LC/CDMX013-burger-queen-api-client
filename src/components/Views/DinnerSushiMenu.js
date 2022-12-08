import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import GridProductDinner from '../GridProductDinner.js';
import DinnerTicket from '../DinnerTicket';
import ModalTicket from '../ModalTicket';

import { axiosGet, axiosPost } from '../../services/api';
import { useState, useEffect } from 'react';

const Dinner = () => {
    console.log(Date())
    const { auth } = useAuth()
    const [show, setShow] = useState(false)
    const [dataMenu, setDataMenu] = useState([])
    const [client, setClient] = useState('')
    const [productsOrder, setProductsOrder] = useState([])
    const order =
    {
        "id": Date.now(),
        "userId": auth.user.id,
        "client": client,
        "products": productsOrder,
        "status": 'pending',
        "dataEntry": Date().toString(),
        "deliveredEntry": ""
    }

    const URL_PRODUCTS = '/products'
    const URL_ORDERS = '/orders'

    const readProducts = async () => {
        try {
            const data = await axiosGet(auth.accessToken, URL_PRODUCTS)
            setDataMenu(data.data)
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const sushiMenu = dataMenu.filter((item) => item.type === 'Sushi menu')

    const handleProducts = (product) => {
        let arrayIndex = productsOrder.findIndex((a) => a.product.name === product.name)
        if (arrayIndex < 0) {
            setProductsOrder([...productsOrder, { qty: 1, product: product }]);
        }
        else {
            let newOrder = productsOrder;
            newOrder[arrayIndex].qty++
            setProductsOrder([...newOrder]);
        }
    }

    const lessProduct = (product) => {
        let indexProduct = productsOrder.findIndex((a) => a.product.name === product.name)
        let newOrder = productsOrder;
        if (newOrder[indexProduct].qty === 1) {
            newOrder = newOrder.filter((elements) => elements.product.name !== product.name)
            setProductsOrder([...newOrder]);
        } else {
            newOrder[indexProduct].qty--
            setProductsOrder([...newOrder]);
        }
    }

    const sendOrder = async () => {
        try {
            const orderAxios = await axiosPost(order, URL_ORDERS, auth.accessToken);
            setClient('')
            setProductsOrder([])
            document.getElementById('client').value = ''
            setShow(false)
        } catch (err) {
            console.log(err.response.data);
        }
    }
    const reset = () =>{
        setProductsOrder([])
        setClient('')
        document.getElementById('client').value = ''
    }

    useEffect(() => {
        readProducts()
    }, [])

    return (
        <article className="grid">
            <header className='dinner-sushi-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-dinner'>
                <NavBarDinner />
            </div>
            <article className='products'>
                <GridProductDinner products={sushiMenu}
                    setClient={setClient}
                    newTicket={handleProducts} />

            </article>
            <article className='ticket'>
                <DinnerTicket name={client}
                    products={productsOrder}
                    addProduct={handleProducts}
                    lessProduct={lessProduct}
                    reset={reset}
                    show={() => setShow(true)}
                />
            </article>
            <ModalTicket id={order.id}
                nameStaff={auth.user.email}
                nameClient={client}
                comanda={order}
                show={show}
                onClose={() => setShow(false)}
                send={sendOrder}
            />
        </article>
    )
}

export default Dinner