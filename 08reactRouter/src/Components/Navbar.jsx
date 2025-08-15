import "@fontsource/poppins";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-screen h-[70px] bg-gray-200">
      <div className="w-full h-full flex justify-evenly items-center">
        {/* Logo */}
        <div id="Logo">
          <div
            className="h-12 w-12 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url("/Logo.png")`,
            }}
          ></div>
        </div>

        {/* Pages */}
        <div
          style={{ fontFamily: "Poppins, sans-serif" }}
          id="Pages"
          className="flex space-x-6 text-gray-800 font-medium"
        >
          {/* <p className="hover:text-red-700 ">Home</p> */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-700" : "hover:text-red-700"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-700" : "hover:text-red-700"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-red-700" : "hover:text-red-700"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* Buttons */}
        <div
          id="buttons"
          className="flex items-center space-x-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <button className="hover:text-gray-600">Get Started</button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
