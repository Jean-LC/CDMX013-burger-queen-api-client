import '../styles/grid.css';
import '../styles/DinnerSuchiMenu.css'
import useAuth from '../../hook/useAuth';
import HeaderGeneral from '../HeaderGeneral';
import NavBarDinner from '../NavBarDinner.js';
import GridProductDinner from '../GridProductDinner.js';
import DinnerTicket from '../DinnerTicket';
import { axiosGet } from '../../services/api';
import { useState, useEffect } from 'react';

const Dinner = () => {
    const { auth } = useAuth()
    const [dataMenu, setDataMenu] = useState([])
    const [client, setClient] = useState('')
    const [productsOrder, setProductsOrder] = useState([
        // {
        //     qty:0,
        //     products:[]
        // }
    ])
    /* const [order, setOrder] = useState([
        {
            "userId": ,
            "client": ,
            "products": [
                {
                    "qty": ,
                    "product": {

                    }
                }
            ]
            "status": ,
            "dataEntry":
        }
    ]) */

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
        
        // let filterArray = productsOrder.filter((a) => a.product.name === product.name )
        let arrayTry = productsOrder.findIndex((a) => a.product.name === product.name)
        if (arrayTry < 0) {
            setProductsOrder([...productsOrder, { qty: 1, product: product }]);
        } 
        else {
            // setProductsOrder(productsOrder[arrayTry].qty++)
            productsOrder[arrayTry].qty++
            // console.log("Soy el else" , productsOrder)
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
                <GridProductDinner products={sushiMenu} setClient={setClient} newTicket={handleProducts} />

            </article>
            <article className='ticket'>
                <DinnerTicket name={client} products={productsOrder} />
            </article>

        </article>
    )
}

export default Dinner