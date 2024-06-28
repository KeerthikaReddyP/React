import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus=useOnlineStatus();
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>{onlineStatus?"🟢":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
