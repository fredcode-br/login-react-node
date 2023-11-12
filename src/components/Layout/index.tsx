import ContainerFluid from "../ContainerFluid"
import Content from "../Content"
import SideNav from "./SideNav"

const Layout = () => {
    return (
       <ContainerFluid>
            <div className="flex w-full p-0 m-0">
                <SideNav />
                <Content />
            </div>
       </ContainerFluid> 
    )
}

export default Layout