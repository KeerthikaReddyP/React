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
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse2.mm.bing.net/th?id=OIP.ONdI50AcLDXgcVOR9WLdhwHaHa&pid=Api&P=0&h=180"
        />
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
  );
};

//props(JS Object)
//We can also send {resName, cuisine} instead of props
//This is known as Destructuring. (JS concept)
const RestaurantCard = ({resName,cuisine}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://tse1.mm.bing.net/th?id=OIP._rTsdRFBYd_7RwuIpTgu9AHaE8&pid=Api&P=0&h=180"
      />
      <h2>{resName}</h2>
      <h4>{cuisine}</h4>
      <h6>4.5/5</h6>
      <h6>32 minutes</h6>
    </div>
  );
};

//We can pass any number of props.
//React will convert all of them into a single object and pass it to the component.
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghana food" cuisine="Biryani, North Indian, chineese"/>
        <RestaurantCard resName="KFC" cuisine="Burger, KFC Chicken"/>
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
