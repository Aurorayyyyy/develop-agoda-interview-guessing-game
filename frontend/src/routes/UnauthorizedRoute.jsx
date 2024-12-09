import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UnauthorizedRoutes = () => {
    const { user } = useAuth()
    
    return !user.isAuthenticated ? <Outlet/> : <Navigate to="/guess"/>
}

export default UnauthorizedRoutes