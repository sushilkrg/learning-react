import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummyp@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
