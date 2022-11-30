import './styles/GridProductDinner.css'

const GridProduct = ({products}) => {
    console.log('products in gridProducts', products)
    // const productSushi = products.filter((product) => product.type === "Sushi menu")
    // console.log(productSushi)
    return (
    <div className='products-grid'>
            <input type='text' className='input-client' placeholder='client' name='client' required></input>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
           {/* <>
              {products.map((product) => (
                    <div className='one-product'>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
            ))
                }
        </> */}
        </div > 
    );
}

export default GridProduct