import HeaderGeneral from '../HeaderGeneral.js';
import useAuth from '../../hook/useAuth';
import NavBarKitchen from '../NavBarKitchen.js';
import OrderReady from '../OrderReady.js';
import { axiosGet } from '../../services/api.js';
import { useState, useEffect } from 'react';

const KitchenDelivered = () => {
    const { auth } = useAuth();
    const [orders, setOrders] = useState([])
    const URL_ORDERS = '/orders'

    const getOrders = async () => {
        try{
            const {data} = await axiosGet(auth.accessToken, URL_ORDERS)  
            setOrders(data)
        } catch (error){
            console.log(error)
        }
    }

    const readyOrders = orders.filter((item) => item.status === 'ready');
    
useEffect(() =>{
    getOrders();
}, [])

    return (
        <section className='grid'>
            <header className='kitchen-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-kitchen'>
                <NavBarKitchen/>
            </div>
            <main  className='orders-list'>
                <OrderReady orders={readyOrders}/>
            </main>
        </section>
    );
}

export default KitchenDelivered;