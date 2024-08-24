import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import Signup from "../Access/Signup";
import Home from "../Access/Home";
import DefaultLayout from '../Layout/DefaultLayout'

const WithLayout = ({ component }) => {
    return <DefaultLayout>{component}</DefaultLayout>;
};
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<DefaultLayout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;