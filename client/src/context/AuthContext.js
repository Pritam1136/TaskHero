import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_State = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_State);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_State);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
