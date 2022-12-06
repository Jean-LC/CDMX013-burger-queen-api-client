import './styles/DinnerStatusReady.css';

const DinnerStatusReady = ({ orders, send }) => {
    let total = null;
    return (
        <>
            {orders.map((order) => (
                <section key={order.id} className='ready-section'>
                    <div className='info-ready-div'>
                        <p className='info-ready'>Id: {order.id}</p>
                        <p className='info-ready'>Client: {order.client}</p>
                        <p className='info-ready'>{order.products[0].product.type}</p>
                    </div>
                    {
                        order.products.map((product) =>
                            <div key={product.product.id} className='products-ready'>
                                <p className='ready-info'>{product.qty} {product.product.name}</p>
                                {/* <p className='ready-info-name'>{product.product.name}</p> */}
                                <span className='just-total' >{total += product.product.price * product.qty}</span>
                                <p className='ready-info-price'>$ {product.product.price}</p>
                            </div>
                        )
                    }
                    <div className='total-button'>
                    {total && <p className='total-ticket'> Total: $ {total.toFixed(2)}</p>}
                    <button className='btn-delivered' onClick={() => send(order.id)}>Delivered</button>
                    </div>
                </section>
            ))
            }
        </>

    );
}

export default DinnerStatusReady;