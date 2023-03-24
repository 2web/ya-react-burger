import React, { ReactElement, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../custom-hooks/hooks";
import { Route, Redirect, RouteProps  } from "react-router-dom";
import { fetchToken } from "../../store/reducers/user-auth";

export const ProtectedRoute: FC<RouteProps & {children: ReactElement} & {onlyAuth: boolean}> = ({ children, onlyAuth, ...rest }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((store) => store.userReducer.accessToken);

  const init = () => {
   dispatch(fetchToken())
  };

  useEffect(() => {
    if (!token) {
      init();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        ((token && onlyAuth) || (!token && !onlyAuth)) ? (
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
