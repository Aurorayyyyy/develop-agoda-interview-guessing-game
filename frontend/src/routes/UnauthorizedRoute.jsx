import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UnauthorizedRoutes = () => {
    const { user } = useAuth()
    console.log(!user.isAuthenticated)
    return !user.isAuthenticated ? <Outlet /> : <Navigate to="/guess" />
}

export default UnauthorizedRoutes