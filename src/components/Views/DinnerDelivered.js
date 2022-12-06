import '../styles/grid.css';
import '../styles/DinnerDelivered.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import { axiosGet} from '../../services/api';
import DinnerStatusDelivered from '../DinnerStatusDelivered';
import { useEffect, useState } from 'react';


const DinnerDelivered = () => {
    const {auth} = useAuth()
    const [orders, setOrders] = useState([])

    const URL_ORDERS = '/orders'

    const getOrders = async () => {
        try {
            const data = await axiosGet(auth.accessToken, URL_ORDERS)
            setOrders(data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const filterDelivered = orders.filter((x) => x.status === "delivered")


    useEffect(() => {
        getOrders()
    }, [])

    return (
        <article className= "grid">
            <header className='dinner-delivered-header'>
                <HeaderGeneral section={auth.user.role.toUpperCase()} email={auth.user.email}/>
            </header>
            <div className='nav-bar-dinner'>
            <NavBarDinner />
            </div>
            <main className= "main-dinner-delivered">
                <DinnerStatusDelivered orders={filterDelivered.reverse()}/>
            </main>
        </article>
    )
}

export default DinnerDelivered