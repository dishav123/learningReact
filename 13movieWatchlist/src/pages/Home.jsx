import { NavLink } from "react-router-dom";

function Home() {
    return (  
        <div>
            <nav>
                <NavLink to='/' className={({isActive})=> isActive?"text-red-400":""}>Home</NavLink>
                <NavLink to='/watchlist' className={({isActive})=> isActive?"text-red-400":""}>Watchlist</NavLink>
            </nav>
            <h1>This is Home</h1>
        </div>
    );
}

export default Home;