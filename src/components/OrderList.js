
const OrderList = ({orders, send}) =>{
    console.log(Array.isArray(orders))
    return(
        <>
            {orders && orders.map((order) => 
                <section key={order.id}>
                    <div>
                        <p>Id: {order.id}</p>
                        <p>Client: {order.client}</p>
                        <p>{order.products[0].product.type}</p>
                    </div>
                    <div>
                    {
                        order.products.map((product) =>
                        <div key={product.product.id}>
                            <p>{product.qty}</p>
                            <p>{product.product.name}</p>
                        </div>
                        )
                    }
                    </div>
                    <button onClick={()=>send(order.id)}>Ready for Dinner</button>
                </section>
            )
            }
        </>
    );
}

export default OrderList;