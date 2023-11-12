import LayoutHeader from "../LayoutHeader"
import Content from "../Content"
import SideNav from "../SideNav"

const Layout = () => {
    return (
        <div 
            className="grid h-screen" 
            style={{ 
                gridTemplateColumns: '220px auto',
                gridTemplateAreas: `'AS MH' 
                                    'AS CT'`
             }}
        >
            <LayoutHeader />
            <SideNav />
            <Content />
        </div>
    )
}

export default Layout