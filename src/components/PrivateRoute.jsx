import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();
  // eslint-disable-next-line no-restricted-globals
  console.log(location.href);
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={() => (currentUser ? children : <Redirect to="/login" />)}
    ></Route>
  );
};
