import MainHeader from "../../components/MainHeader";
import { Outlet } from "react-router-dom";
import MainFooter from "../../components/MainFooter";

export default function BasePage() {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
            <MainFooter />
        </>
    )
}