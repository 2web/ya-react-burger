import React, { useEffect, useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../custom-hooks/hooks";
import { Route, Redirect } from "react-router-dom";
import { fetchToken } from "../../store/reducers/user-auth";
import PropTypes from "prop-types";

export const ProtectedRoute: FC<any> = ({ children, onlyAuth, ...rest }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((store) => store.userReducer.accessToken);
  // const [isUserLoaded, setUserLoaded] = useState<boolean>(false);

  const init = async () => {
    await dispatch(fetchToken());
    // setUserLoaded(true);
  };

  useEffect(() => {
    if (!token) {
      init();
    }
  }, []);

  // if (isUserLoaded) {
  //   return null;
  // }
//token && onlyAuth) || (!token && !onlyAuth
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
