import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Contact Us Page</h1>
      <p>email- {user.email}</p>
    </>
  );
};

export default Contact;
