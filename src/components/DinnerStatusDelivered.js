
const DinnerStatusDelivered = ({orders}) =>{

    return(
        <>
        {
            orders.map((delivered) => (
                <section key={delivered.id}>
                    <p>Id: {delivered.id}</p>
                    <p>Client: {delivered.client}</p>
                    <p>{delivered.products[0].product.type}</p>
                    <div>
                    {
                        delivered.products.map((product) =>
                        <div key={product.product.id}>
                            <p>{product.qty}</p>
                            <p>{product.product.name}</p>
                            <p>{product.product.price}</p>
                        </div>
                        )
                    }
                    </div>
                </section>
            ))
        }
        </>

    );
}

export default DinnerStatusDelivered;