import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthorizedRoutes = () => {
    const { user } = useAuth()
    
    return user.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

export default AuthorizedRoutes