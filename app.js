import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    logo
 *    nav items
 * Body
 *    Search bar
 *    res container
 *      res cards
 * Footer
 *    copyright
 *    links
 *    address
 *    contact info
 */
const Header=()=>{
  return <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://tse2.mm.bing.net/th?id=OIP.ONdI50AcLDXgcVOR9WLdhwHaHa&pid=Api&P=0&h=180" />
    </div>
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
};

const AppComponent = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
