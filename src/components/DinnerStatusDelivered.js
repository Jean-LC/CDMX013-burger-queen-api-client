import './styles/DinnerStatusReady.css';

const DinnerStatusDelivered = ({orders}) =>{
    let total = null;
    return(
        <>
        {
            orders.map((delivered) => (
                <section key={delivered.id} className='ready-section'>
                    <div className='info-ready-div'>
                    <p className='info-ready'>Id: {delivered.id}</p>
                    <p className='info-ready'>Client: {delivered.client}</p>
                    <p className='info-ready'> {delivered.products[0].product.type}</p>
                    </div>
                    {
                        delivered.products.map((product) =>
                        <div key={product.product.id}
                        className='products-ready'>
                            <p className='ready-info'>{product.qty} {product.product.name}</p>
                            <span className='just-total' >
                            {total += product.product.price * product.qty}
                            </span>
                            <p className='ready-info-price'>$ {product.product.price}</p>
                            
                        </div>
                        )
                    }
                    <div className='total-button'>
                    {total && <p className='total-ticket'> Total: $ {total.toFixed(2)}</p>}
                    </div>
                </section>
            ))
        }
        </>

    );
}

export default DinnerStatusDelivered;