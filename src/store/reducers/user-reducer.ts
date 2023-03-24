import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT,
  USER_TOKEN,
  GET_USER,
  PATCH_USER,
  TUserActions,
} from "../actions/userActions";

type TUserState = {
  accessToken: string | null,
  email: string,
  name: string,
};

const userState: TUserState = {
  accessToken: localStorage.getItem('accessToken'),
  email: "",
  name: "",
};

export const userReducer = (state = userState, action: TUserActions) => {
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
      localStorage.setItem("accessToken", action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case USER_TOKEN: {
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("accessToken");
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
