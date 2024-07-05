import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md">
      <div>
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="m-4 p-2">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4 p-2 hover:text-orange-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-4 p-2 hover:text-orange-500">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="m-4 p-2 hover:text-orange-500">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="m-4 p-2 hover:text-orange-500">
            <Link to={"/grocery"}>Grocery Store</Link>
          </li>
          <li className="relative m-4 p-1 font-semibold">
            <span className="text-3xl">🛒</span>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 transform translate-x-1/2 -translate-y-1/2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItems.length}
            </span>
          </li>
          <li className="m-4 p-2 hover:text-orange-500">
            <button
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </li>
          <li className="m-4 p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
