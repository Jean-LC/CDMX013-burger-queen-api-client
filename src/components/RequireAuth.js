import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireAuth = ({allowedRole}) => {
    const { auth } = useAuth();
    const location = useLocation();
    //userLogged.user.role === "admin"
    return (
    //?. significa optional chaining que es similar a . cuando tienes un obj
    //Aquí pregunta sí auth es true (esta autenticado?), después entra a user y al boolean
    auth?.user?.role.includes(allowedRole)
    ? <Outlet />
    //state nos permite navegar de regreso.
    : <Navigate to='/' state={{ from: location}} replace /> 
    )
}

export default RequireAuth;