import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { fetchToken } from "../../utils/user-auth";

export function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.userReducer.accessToken);
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await dispatch(fetchToken());
    setUserLoaded(true);
  };

  useEffect(() => {
    if (!token) {
      init();
    }
  }, []);

  if (isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
