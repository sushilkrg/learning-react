import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      <h1>About us page</h1>
      <p>This is Swiggy clone web app made with react by {user.name}</p>
    </>
  );
};

export default About;
