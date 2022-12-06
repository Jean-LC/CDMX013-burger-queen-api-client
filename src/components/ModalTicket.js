import './styles/ModalTicket.css'

const ModalTicket = ({ id, nameStaff, comanda, nameClient, show, onClose, send }) => {
    let total = null
    if (!show) {
        return null
    } else {
        return (
            <div className='modal-ticket' >
                <div className="modal-ticket-content" >
                    <div className= "modal-ticket-paragraph">
                        <p>SUSHI MENU</p>
                        <p>TICKET ID: {id} </p>
                        <p>DINNER STAFF: {nameStaff}</p>
                        <p>CLIENT: {nameClient} </p>
                    </div>
                    {comanda.products.map((product) => {
                        return (
                            <div className="list-modal-ticket" key={product.product.id}>
                                <div className="modal-ticket-comanda-p">
                                <p className="comanda">
                                    {product.qty}  {product.product.name} </p>
                                <p className='price-ticket-modal'>${product.qty *product.product.price}</p>
                                </div>
                                <span className="span-ticket">{total += product.qty * product.product.price}</span>
                            </div>
                        )
                    })}
                    <p>Total: ${total}</p>
                    <div className= "btn-ticket">
                        <button className= "btn-ticket-send" onClick={() => send()}>Send to kitchen</button>
                        <button className= "btn-ticket-cancel" onClick={onClose} >Cancel</button>
                    </div>

                </div >
            </div>
        )
    }
}

export default ModalTicket;