import { useState } from "react";
import logo from "../images/swiggy-logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo">
        {/* <img className="logo" src="../images/swiggy-logo.png" alt="logo" /> */}
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmgy2mWnEu7zjSYDGsCIYRlLAzRl-VZwtfX6AHyBb&s" alt="logo"  />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
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
