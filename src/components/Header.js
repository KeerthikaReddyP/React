import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li className="m-4 p-2 ">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
