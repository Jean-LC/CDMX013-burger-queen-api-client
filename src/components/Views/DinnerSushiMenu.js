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

    const getNewTicket = (product) => {

        if(productsOrder.indexOf(product) <0) {
            setProductsOrder([...productsOrder, { qty: 1, product: product }]);
                console.log('agrega nuevo producto')
        } else {
            console.log('ya existe el producto')
        }
        // se cancela, funciona con string
       /*  productsOrder.forEach((item) => {
            if (item.name !== product.name) {
                setProductsOrder([...productsOrder, { qty: 1, product: product }]);
                console.log('agrega nuevo producto')
            } else {
                console.log('ya existe el producto')
            }
        }
        ) */

        // if(productsOrder.map((item)=> item.name !== product.name)){
        //     setProductsOrder([...productsOrder, {qty: 1, product: product}]);
        //     console.log("holi squema ")
        // } else {
        //     console.log('adios')
        // }

        // else {
        //     setProductsOrder([...productsOrder, productsOrder.qty ++])
        // }
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
                <GridProductDinner products={sushiMenu} setClient={setClient} newTicket={getNewTicket} />

            </article>
            <article className='ticket'>
                <DinnerTicket name={client} products={productsOrder} />
            </article>

        </article>
    )
}

export default Dinner