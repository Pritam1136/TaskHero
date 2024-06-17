import { error } from "console";
import { createContext, useContext } from "react";

export const Dashboard = createContext(undefined);

export const useUserContext = () => {
  const user = useContext(Dashboard);

  if (user === undefined) {
    throw new error("no dashboard...");
  }

  return user;
};
