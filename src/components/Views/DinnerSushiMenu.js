import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import GridProductDinner from '../GridProductDinner.js';
import DinnerTicket from '../DinnerTicket';
import { axiosGet, axiosPost } from '../../services/api';
import { useState, useEffect } from 'react';

const Dinner = () => {
    const { auth } = useAuth()
    const [dataMenu, setDataMenu] = useState([])
    const [client, setClient] = useState('')
    const [productsOrder, setProductsOrder] = useState([])
    const order = [
        {
            "userId": auth.user.id,
            "client": client,
            "products": productsOrder,
            "status": 'pending',
            "dataEntry": Date().toString()
        }
    ]

    const URL_USERS = '/products'

    const readProducts = async () => {
        try {
            const data = await axiosGet(auth.accessToken, URL_USERS)
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

    const sendOrder = async() => {
        try{
            const orderAxios = await axiosPost(order, URL_USERS, auth.accessToken );
            console.log(orderAxios)
            setProductsOrder([])
        }catch (err) {
            console.log(err.response.data);
        }
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
                reset={() => setProductsOrder([])} 
                send ={sendOrder}
                />
            </article>

        </article>
    )
}

export default Dinner