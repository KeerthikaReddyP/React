import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex p-4 justify-between">
      <div className="">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex">
          <li className="m-4 p-2 items-center">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4 p-2 items-center">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-4 p-2 items-center">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="m-4 p-2 items-center">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="m-4 p-2 items-center">
            <Link to={"/grocery"}>Grocery Store</Link>
          </li>
          <li className="m-4 p-2 items-center">Cart</li>
          <li className="m-4 p-2 items-center bg-purple-200">
            <button
              className=""
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
