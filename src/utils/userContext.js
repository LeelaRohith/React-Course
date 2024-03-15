import { createContext } from "react";
const userContext = createContext({
  user: { name: "Dummy name", email: "dummy10@gmail.com" },
});
export default userContext;
