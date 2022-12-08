import '../styles/grid.css';
import '../styles/Kitchen.css';
import HeaderGeneral from '../HeaderGeneral';
import NavBarKitchen from '../NavBarKitchen.js';
import OrderList from '../OrderList.js';
import useAuth from '../../hook/useAuth';
import { axiosGet, axiosPatch } from '../../services/api.js';
import { useEffect, useState } from 'react';


const Kitchen = () => {
    const { auth } = useAuth()
    const [orders, setOrders] = useState([])
/*     const status = {
        status:'pending'
    } */

    const URL_ORDERS= '/orders'
    
    const getOrders = async () => {
        try {
            const data = await axiosGet(auth.accessToken, URL_ORDERS)
            setOrders(data.data)
        } catch (err) {
            console.log(err)
        }
    }
    
    const pending = orders.filter((item) => item.status === 'pending');
    
    const patchOrder = async (orderId) => {
        const index = orders.findIndex((a) => a.id === orderId )
        let changeStatus = orders[index]
        changeStatus.status = 'ready'
        changeStatus.deliveredEntry = Date().toString()
        console.log(changeStatus);
        try {
            await axiosPatch(URL_ORDERS, orderId, auth.accessToken, changeStatus)
            getOrders()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getOrders()
    },[])

    return (
        <section className="grid">
            <header className='kitchen-menu-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-kitchen'>
                <NavBarKitchen/>
            </div>
            <main className='orders-list'>
                <OrderList orders={pending} send={patchOrder}/>
            </main>
        </section>
    )
}

export default Kitchen