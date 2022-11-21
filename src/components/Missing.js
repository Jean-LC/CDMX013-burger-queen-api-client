import { Link } from "react-router-dom"
import './styles/grid.css';
import './styles/missing.css';

const Missing = () => {
    return (
        <article className= "grid">
            <h2 className="missing-page-h2">Oopsi dupsi!</h2>
            <p className="missing-page-p">404: Page Not Found</p>
            <div className="missing-page-link">
                <Link to="/">Please login</Link>
            </div>
        </article>
    )
}

export default Missing