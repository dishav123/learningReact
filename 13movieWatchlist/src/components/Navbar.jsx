import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center" >
      <div>
        <nav className="flex justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : ""} m-1 p-2 `
            }
            style={{ fontFamily: "poppins" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : ""} m-1 p-2`
            }
            style={{ fontFamily: "poppins" }}
          >
            Watchlist
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
