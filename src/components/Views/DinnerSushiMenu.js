import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import GridProductDinner from '../GridProductDinner.js'
import {axiosGet} from '../../services/api';
import { useState, useEffect } from 'react';

const Dinner = () => {
    const { auth } = useAuth()
    const [dataMenu, setDataMenu] = useState([])

    const URL_USERS = '/products'

    const readProducts = async () =>{
        try {
           const data = await axiosGet(auth.accessToken, URL_USERS)
            setDataMenu(data)
            console.log(dataMenu)
        } catch(err) {
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
                <GridProductDinner products = {dataMenu.data}/>

            </article>
            <article className='ticket'>
                <button className='send-kitchen-button'>Send to Kitchen</button>

            </article>

        </article>
    )
}

export default Dinner