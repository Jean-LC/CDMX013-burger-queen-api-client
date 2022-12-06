import '../styles/grid.css';
import '../styles/DinnerStatus.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import DinnerStatusReady from '../DinnerStatusReady';
import { axiosGet, axiosPatch } from '../../services/api';
import { useEffect, useState } from 'react';

const DinnerStatus = () => {
    const { auth } = useAuth()
    const [orders, setOrders] = useState([])
    const URL_ORDERS = '/orders'

    const getOrders = async () => {
        try {
            const data = await axiosGet(auth.accessToken, URL_ORDERS)
            setOrders(data.data)
            console.log("Soy data desde dinner status", data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const statusFilter = orders.filter((item)=>item.status==='ready');

    const patchOrder = async (orderId) => {
        const index = orders.findIndex((a) => a.id === orderId )
        let changeStatus = orders[index]
        changeStatus.status = 'delivered'
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
    }, [])

    return (
        <article className="grid">
            <header className='dinner-status-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email} />
            </header>
            <div className='nav-bar-dinner'>
                <NavBarDinner />
            </div>
            <main className='main-dinner-status'>
                <DinnerStatusReady orders={statusFilter} send={patchOrder}/>
            </main>


        </article>
    )
}

export default DinnerStatus