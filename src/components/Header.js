import { useState } from "react";
import Logo from "../assets/images/swiggylogo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img src={Logo} alt="logo" className="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <Title />
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="login-button" onClick={handleLogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;