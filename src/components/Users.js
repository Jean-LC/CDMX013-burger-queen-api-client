import useAuth from "../hook/useAuth";
import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const Users = () => {
    const { auth } = useAuth();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState();
    const [data, setData] = useState([]);

    const readUser = async () => {

        try {

            const myObject = {
                name:'nico',
                lastname:'perez'
            }

            const {name, lastName} = myObject

            console.log(name);
            console.log(lastName);
          
            const {data} = await getUsers(auth.accessToken) 
             
            setData(data)


       
        }
        catch (err) {
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        
        readUser()
    }, [])

    return (
        <>
            <p>soy la data con use state </p>
            {data.map((user) => (<p key={user.id}>{user.email}</p>))}
        </>
    )
}

export default Users;