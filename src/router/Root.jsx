import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navb from "../components/Navb";
import HomeView from "../pages/HomeView";


function Root() {

    return (
        <>
            <Navb/> 
            <Outlet/>
            <Footer />
        </>
    )
}

export default Root;