import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "../context/context";
const RequireAuth = ({ children }) => {
  const {dispatch} = useAppContext();
  let auth = window.localStorage.getItem("auth") || false;
  const location = useLocation();
  useEffect(() => {
    if(auth) {
      dispatch({type: "LOGIN", payload: JSON.parse(auth)});
    }
  } , []);

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default RequireAuth;

