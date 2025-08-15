import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4 text-center h-[30vh]">
        <div className="h-[100%] w-[100%] flex justify-center gap-[8%] mt-4">
          <div id="company" className="text-start">
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="font-bold text-[16px] border-b-2 border-red-400 inline-block pb-1 "
            >
              Company
            </p>
            <div
              className="mt-2 text-gray-400 text-[14px] "
              id="Company's Content"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <NavLink to="/" className={(isActive)=>(isActive?"text-red-700":"text-gray-400")}>Home</NavLink>
              <p>About us</p>
              <p>Our Services</p>
              <p>Privacy Policy</p>
              <p>Affilate Program</p>
            </div>
          </div>

          <div id="Get Help" className="text-start">
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="font-bold text-[16px] border-b-2 border-red-400 inline-block pb-1 "
            >
              Get Help
            </p>
            <div
              className="mt-2 text-gray-400 text-[14px] "
              id="Company's Content"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>FAQ</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>Order Status</p>
              <p>Payment Options</p>
            </div>
          </div>

          <div id="Online Shop" className="text-start">
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="font-bold text-[16px] border-b-2 border-red-400 inline-block pb-1"
            >
              Online Shop
            </p>
            <div
              className="mt-2 text-gray-400 text-[14px] "
              id="Company's Content"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>Watch</p>
              <p>Bag</p>
              <p>Shoes</p>
              <p>Dress</p>
              <p>Jewellery</p>
            </div>
          </div>

          <div id="follow-us" className="text-start">
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="font-bold text-[16px] mb-0 border-b-2 border-red-400 inline-block w-24 pb-1 hover:w-26">Contact Us</p>
            <div className="flex space-x-2 mt-2 ">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
