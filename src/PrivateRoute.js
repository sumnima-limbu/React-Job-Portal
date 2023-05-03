import { Navigate } from "react-router-dom";
import useLocalStorage from "./components/useLocalStorage";

const PrivateRoute = ({ children }) => {
  const { getLocalData } = useLocalStorage();
  const isLoggedIn = getLocalData("isLoggedIn");

  return isLoggedIn === true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
