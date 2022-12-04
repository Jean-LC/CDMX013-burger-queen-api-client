import './styles/DinnerTicket.css'
import add from '../images/add.png'
import rest from '../images/rest.png'


const DinnerTicket = ({ name, products, addProduct, lessProduct, reset, send }) => {
    let total = null;
    return (
        <div>
            <div className="dinner-ticket-container">
                <p className="dinner-ticket-client">Client: {name}</p>
                {products && products.map((product) => (
                    <div className="ticket-main" key={product.product.id}>
                        <section className="btn-plus-minus-dinner">
                            <img src={rest} className='rest' alt='rest' onClick={() => lessProduct(product.product)}></img>
                            <p className="dinner-counter">{product.qty}</p>
                            <img src={add} className='rest' alt='add' onClick={() => addProduct(product.product)}></img>
                        </section>
                        <div className='dinner-ticket-ps'>
                            <p className="dinner-ticket-name">{product.product.name}</p>
                            <p className="dinner-ticket-price"> ${product.product.price}</p>
                            <p className='total-ticket'> $ {product.product.price * product.qty}</p>
                        </div>
                        <span className='just-total' >{total += product.product.price * product.qty}</span>
                    </div>
                ))}
            </div>
            <div className='dinner-ticket-buttons'>
                <button className='reset-kitchen-button' onClick={reset}>Reset</button>
                {total && <p className='total-ticket'> Total: $ {total}</p>}
                <button className='send-kitchen-button' onClick={() => send}>Send to Kitchen</button>
            </div>
        </div>
    );
}

export default DinnerTicket;