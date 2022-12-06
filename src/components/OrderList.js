import './styles/OrderList.css'

const OrderList = ({orders, send}) =>{
    console.log(Array.isArray(orders))
    return(
        <>
            {orders && orders.map((order) => 
                <section key={order.id} className='section-order'>
                    <div className='div-order'>
                        <p className='paragraph-order'>Id: {order.id}</p>
                        <p className='paragraph-order'>Client: {order.client}</p>
                        <p className='paragraph-order'>{order.products[0].product.type}</p>
                    </div>
                    <div>
                    {
                        order.products.map((product) =>
                        <div key={product.product.id} className='div-products'>
                            <p className='paragraph-products-qty'>{product.qty}</p>
                            <p className='paragraph-products'>{product.product.name}</p>
                        </div>
                        )
                    }
                    </div>
                    <button onClick={()=>send(order.id)} className='button-ready'>Ready for Dinner</button>
                </section>
            )
            }
        </>
    );
}

export default OrderList;