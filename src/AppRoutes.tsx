import { BrowserRouter, Routes, Route } from "react-router-dom";

// import BasePage from "./pages/BasePage";
import BasePageForm from "./pages/BasePageForm";

// import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                {/* <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Route> */}
                <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Layout />} />
                </Route>
                <Route path="/" element={<BasePageForm />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;