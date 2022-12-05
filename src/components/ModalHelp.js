import './styles/ModalHelp.css';
import logoModal from '../images/texto-suchito.png';

function ModalHelp({ show, onClose }) {
    if (!show) {
        return null;
    }
    return (
        <div className="modal-help" onClick={onClose}>
            <div className="modal-help-content" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <img src={logoModal} className="logo-modal" alt="logo"></img>
                </header>

                <main className="modal-body">
                    <p>
                        If you need help with user / password contact the <span id="admin-help">admin</span>
                    </p>
                    <p>
                        If you are the admin, contact <span id="development-help">development</span>
                    </p>
                </main>
                <footer className="modal-footer">
                    <button className="close-help" onClick={onClose}>
                        Close
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default ModalHelp;