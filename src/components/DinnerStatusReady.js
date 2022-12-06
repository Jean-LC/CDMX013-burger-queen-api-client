
const DinnerStatusReady = ({ orders, send }) =>{
    console.log('dinner status ready', orders)
    return(
        <>
        {orders.map((order) => (
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
                            <p>{product.product.price}</p>
                        </div>
                        )
                    }
                    </div>
                    <button onClick={()=> send(order.id)}>Delivered</button>
                </section>
        ))
        }
        </>

    );
}

export default DinnerStatusReady;