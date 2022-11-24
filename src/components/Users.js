import './styles/Users.css';
import { useState } from 'react';
import edit from '../images/edit.png';
import deleteImg from '../images/deleteImg-black.png';
import ModalDelete from './ModalDelete/ModalDelete';

const Users = ({ users, handleDelete, handleUser }) => {
    const [show, setShow] = useState(false);
    const [activeId, setActiveId] = useState('')

    const fnEdit = () => {
        console.log(activeId)
        handleUser(activeId)
        setShow(false)
    }

    const fnDelete = () => {
        console.log(activeId)
       handleDelete(activeId)
        setShow(false)
    }

    return (
        <>
            {users.map((user) => (
                <div className="div-users" key={user.id}>
                    <p className='p-user-content'>{user.role.toUpperCase()}</p>
                    <p className='p-user-content'>{user.email}</p>
                    <img src={edit} className='edit-button'
                        alt='edit-button'
                        id={user.id}
                        onClick={() => {
                            setActiveId(user.id)
                            fnEdit()
                        }}
                    >
                    </img>
                    <img src={deleteImg}
                        className='delete-image'
                        alt='delete'
                        id={user.id}
                        onClick={() => {
                            setActiveId(user.id)
                            setShow(true)
                          
                        }}
                    >
                    </img>
                </div>
            ))}
            <ModalDelete deleteHandle={fnDelete} show={show} onClose={() => setShow(false)} />
        </>
    )
}

export default Users;