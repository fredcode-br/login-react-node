// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import DashBoard from "../../pages/Dashboard";
import Header from "./Header";

const Content = () => {
    return (
        <div 
            className="w-full flex flex-col items-center relative " 
        >
            <Header />
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </BrowserRouter> */}
            <h3>Home</h3>
        </div>
    )
};

export default Content