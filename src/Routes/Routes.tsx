import { Routes, Route } from "react-router";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AuthWrapper from "../Wrappers/AuthWrapper";
import Home from "../Pages/Home";


const AllRoutes = () => {

    return (
        <Routes>
            <Route element={<AuthWrapper/>}>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Signup/>} />
            </Route>

            <Route path="" element={<Home/>} />
        </Routes>
    )
}


export default AllRoutes;