import axios from 'axios';
import useAuth from "../hook/useAuth";
import { useState } from 'react';

const Users = () => {
    const { auth } = useAuth();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();

    const readUser = async () => {

        try {
            const getUser = await axios.get('http://localhost:8080/users', {
                headers: {
                    'Content-Type': 'application/json',

                    'Authorization': `Bearer ${auth.accessToken}`
                }
            }
            );

            console.log(getUser.data);
            

            // getUser.data.map((user) => {
            //            return setData()
            // })
        }
        catch (err) {
            console.log(err.response.data)

        }
    }
   readUser()

    return (
        <>
            <p>soy la data con use state </p>
        </>
    )

}

export default Users;