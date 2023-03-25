import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT,
  USER_TOKEN,
  GET_USER,
  PATCH_USER,
  TUserActions,
} from "../actions/userActions";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/const";

type TUserState = {
  accessToken: string | null,
  email: string,
  name: string,
};

const userState: TUserState = {
  accessToken: localStorage.getItem(ACCESS_TOKEN),
  email: "",
  name: "",
};

export const userReducer = (state = userState, action: TUserActions) => {
  switch (action.type) {
    case USER_REGISTER: {
        localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
        return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case USER_LOGIN: {
      localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case USER_TOKEN: {
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
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
