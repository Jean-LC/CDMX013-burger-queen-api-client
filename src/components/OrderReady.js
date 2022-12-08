
const OrderReady = ({orders}) =>{
    // const orderDate = (date) => new Date(date)
    const differenceDate = (entry, delivered) => {
        const dataEntry= new Date(entry).getTime()
        const dataDelivered = new Date(delivered).getTime()
        return(new Date(dataDelivered-dataEntry).getMinutes());
    }
    return(
        <>
        {orders && orders.map((order) => 
                <section key={order.id} className='section-order section-ready-order'>
                    <div className='div-order'>
                    <p className='paragraph-order'>Minutes it took to prepare: {differenceDate(order.dataEntry, order.deliveredEntry)}</p>
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
                </section>
            )
            }
        </>

    );
}

export default OrderReady;