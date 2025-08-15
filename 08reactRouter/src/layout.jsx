import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";

export default function Layout(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}