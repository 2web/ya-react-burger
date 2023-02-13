import React from "react-redux";
import { useAppSelector } from "../../custom-hooks/hooks";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, onlyAuth, ...rest }) => {
  const token = useAppSelector((store) => store.userReducer.accessToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (token && onlyAuth) || (!token && !onlyAuth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: (onlyAuth) ? "/login" : "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.element,
  onlyAuth: PropTypes.bool,
};
