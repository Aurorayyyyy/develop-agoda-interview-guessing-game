import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthorizedRoute from "./AuthorizedRoute.jsx";
import UnauthorizedRoutes from "./UnauthorizedRoute.jsx";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";
import Guess from "../Components/Guess.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UnauthorizedRoutes />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>

                <Route element={<AuthorizedRoute />}>
                    <Route path="/guess" element={<Guess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
