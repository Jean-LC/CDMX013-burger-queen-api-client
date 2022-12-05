import './styles/ModalTicket.css'

const ModalTicket = ({ id, nameStaff, comanda, nameClient, show, onClose, send, reset }) => {
    // console.log("soy desde modal tickt", comanda[0])
    let total = null
    if (!show) {
        return null
    } else {
        return (
            <div className='modal-ticket' >
                <div className="modal-ticket-content" >
                    <div>
                        <p>SUSHI MENU</p>
                        <p>TICKET ID: {id} </p>
                        <p>DINNER STAFF: {nameStaff}</p>
                        <p>CLIENT: {nameClient} </p>
                    </div>
                    {comanda.products.map((product) => {
                        return (
                            <div key={product.product.id}>
                                <p className="comanda">
                                    {product.qty}
                                    {product.product.name}
                                    ${product.qty *product.product.price}</p>
                                <span>{total += product.qty * product.product.price}</span>
                            </div>
                        )
                    })}
                    <p>Total: ${total}</p>
                    <button onClick={() => send()}>Send to kitchen</button>
                    <button onClick={onClose} >Cancel</button>
                </div >
            </div>
        )
    }

}

export default ModalTicket;