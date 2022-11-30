import HeaderGeneral from "../HeaderGeneral.js";
import NavbarAdmin from "../NavbarAdmin.js";
const ProductAdmin = () => {
    return (
        <div className="grid">
            <header className='admin-header'>
                <HeaderGeneral section={'ADMIN'} email={"mena@suchito.com"} />
            </header>
            <div className='nav-bar-admin'>
                <NavbarAdmin />
            </div>
            <div className='button-create-product'>
                <button className="create-product">Create product</button>
            </div>     
        </div>
        
    )
}

export default ProductAdmin