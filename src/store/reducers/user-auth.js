import { request } from "../../utils/fetch";
import {
  REGISTER_URL,
  LOGIN_URL,
  TOKEN_URL,
  LOGOUT_URL,
  GET_USER_URL,
} from "../../utils/const";
import {
  userRegister,
  userLogin,
  userToken,
  userLogout,
  getUser,
  patchUser,
} from "../actions";

export const fetchRegister = ({ email, name, password }) => {
  return (dispatch) => {
    request(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, name, password }),
    })
      .then((res) => {
        if (res.success) {
          dispatch(userRegister(res));
        }
      })
      .catch((error) => error);
  };
};

export const fetchLogin = ({ email, password }) => {
  return (dispatch) => {
    request(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.success) {
          dispatch(userLogin(res));
        }
      })
      .catch((error) => error);
  };
};

export const fetchToken = () => {
  return (dispatch) => {
    request(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then((res) => {
        if (res.success) {
          dispatch(userToken(res));
        }
      })
      .catch((error) => error);
  };
};

export const fetchLogout = () => {
  return (dispatch) => {
    request(LOGOUT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then((res) => {
        if (res.success) {
          dispatch(userLogout(res));
        }
      })
      .catch((error) => error);
  };
};

export const fetchGetUser = (accessToken) => {
  return (dispatch) => {
    request(GET_USER_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (res.success) {
          dispatch(getUser(res));
        } else {
          dispatch(fetchToken());
          fetchGetUser(localStorage.getItem("accessToken"));
        }
      })
      .catch((error) => {
        if (!error.success) {
          dispatch(fetchToken());
        }
      });
  };
};

export const fetchPatchUser = ({ accessToken, email, name, password }) => {
  return (dispatch) => {
    request(GET_USER_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: accessToken,
      },
      body: JSON.stringify({ email, name, password }),
    })
      .then((res) => {
        if (res.success) {
          dispatch(patchUser(res));
        }
      })
      .catch((error) => error);
  };
};
