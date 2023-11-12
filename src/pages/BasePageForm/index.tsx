import { Outlet } from "react-router-dom";

export default function BasePageForm() {
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}