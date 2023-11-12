import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashBoard from "../../pages/Dashboard";

const Content = () => {
    return (
        <div 
            className="flex flex-col items-center relative bg-ligth-300 overflow-y-scroll pt-10" 
            style={{ 
                gridArea: 'CT', 
                height: '88vh'
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Content