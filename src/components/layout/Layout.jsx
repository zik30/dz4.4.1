import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Outlet } from "react-router"



const Layout = () => {


    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout