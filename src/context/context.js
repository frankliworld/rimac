import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: {},
  status: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, status: true };
    case "LOGOUT":
      return { ...state, user: {}, status: false };
    default:
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        user: state.user,
        status: state.status,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };