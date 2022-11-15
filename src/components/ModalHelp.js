
function ModalHelp() {
    return(
        <div className= "modal-help">
            <dialog className= "modal-help-dialog">
                <p>
                If you need help with user / password contact the <span className="admin-help">admin</span>
                </p>
                <p>
                If you are the admin, contact <span className="development-help">development</span>
                </p>
                <button className="close-help">
                    Close
                </button>
            </dialog>
        </div>
    );
}

export default ModalHelp;