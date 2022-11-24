import './ModalDelete.css'
import deleteImg from "../../images/deleteImg.png";
import confirmImg from "../../images/check.png"
// import { closeModal } from "./showModal";


const ModalDelete = ({show, deleteHandle, onClose}) => {
    if (!show) {
        return null;
    }
    return (
        <div className="delete-modal" >
            <div className='delete-modal-content'>
            Are you sure you want to delete?
            <img src={confirmImg} alt='confirm' className="img-delete-modal" onClick={deleteHandle}></img>
            <img src={deleteImg} alt='delete' className="img-delete-modal" onClick={onClose}></img>
            </div>
        </div>
    );
}

export default ModalDelete;