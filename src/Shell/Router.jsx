import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import Signup from "../Access/Signup";
import Home from "../Access/Home";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;