import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const { user } = useContext(UserContext);

  return (
  <p className="footer">This app is developed by {user.name}</p>
  );
};

export default Footer;
