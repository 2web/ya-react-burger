import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT,
  USER_TOKEN,
  GET_USER,
  PATCH_USER,
} from "../actions";

const userState = {
  accessToken: null,
  email: "",
  name: "",
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case USER_REGISTER: {
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case USER_LOGIN: {
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case USER_TOKEN: {
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        accessToken: null,
        email: "",
        name: "",
      };
    }
    case GET_USER: {
      return {
        ...state,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case PATCH_USER: {
      return {
        ...state,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    default:
      return state;
  }
};
