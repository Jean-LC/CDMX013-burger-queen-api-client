import './styles/DinnerTicket.css'
import add from '../images/add.png'
import rest from '../images/rest.png'


const DinnerTicket = ({name, products}) => {
    console.log("soy products desde ticket: ", products)
    return(
        <div className= "dinner-ticket-container">
                <p className= "dinner-ticket-p">Client: {name}</p>
                {products && products.map((product) => (
            <div className= "ticket-main" key={product.product.id}>
                <section className="btn-plus-minus-dinner">
                    <img  src={rest} className='rest' alt='rest'></img>
                    <p className="dinner-counter">{product.qty}</p>
                    <img src={add} className='rest' alt='rest'></img>
                </section>
                <p className= "dinner-ticket-list">{product.product.name}  ${product.product.price}</p>
            </div>
                ))
                }
            <div>
                <p className='total-ticket'>Total: </p>
                <button className='reset-kitchen-button'>Reset</button>
                <button className='send-kitchen-button'>Send to Kitchen</button>
            </div>
        </div>
    );
}

export default DinnerTicket;