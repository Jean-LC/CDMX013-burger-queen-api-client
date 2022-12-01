import './styles/GridProductDinner.css'

const GridProduct = ({ products, setClient }) => {
    console.log('products in gridProducts', products)
    return (
        <div className='products-grid'>
            <input 
            type='text' 
            className='input-client' 
            placeholder='client' 
            name='client' 
            id='client'
            required
            maxLength= '15'
            onChange={(e) => {setClient(e.target.value)}}></input>
            {products.map((product) => (
                <div key={product.id} className='one-product' onClick={() => console.log(product.id)}>
                    <p className='product-body'>{product.name}</p>
                    <p className='product-body'>${product.price}</p>
                </div>
            ))
            }
        </div >
    );
}

export default GridProduct