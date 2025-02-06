import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import HatComp from "./Header/HatComp"
// import Header from "./Header/Header"
// import Header from "./Header/Header"
// import Header from "./Header/Header"

const Layout = () => {
    return (
        <>
            <HatComp/>
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout