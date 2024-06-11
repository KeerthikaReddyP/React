import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
