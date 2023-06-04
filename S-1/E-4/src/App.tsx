import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-c2119aff1d9a65251729cbc3510375e7_screen.jpg?ts=1629395591"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart_container">
            <img className="cart" src="https://static.vecteezy.com/system/resources/previews/016/651/041/large_2x/shopping-cart-icon-illustration-design-template-free-vector.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}
