import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import { NavLink } from "react-router-dom";

function Layout() {
    return ( 
        <div>
            <Navbar/>
            <Outlet/>
        </div>
     );
}

export default Layout;