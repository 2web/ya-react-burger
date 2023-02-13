export const USER_LOGIN: 'USER_LOGIN' = "USER_LOGIN";
export const USER_REGISTER: 'USER_REGISTER' = "USER_REGISTER";
export const USER_LOGOUT: 'USER_LOGOUT' = "USER_LOGOUT";
export const USER_TOKEN: 'USER_TOKEN' = "USER_TOKEN";
export const GET_USER: 'GET_USER' = "GET_USER";
export const PATCH_USER: 'PATCH_USER' = "PATCH_USER";

type TPayloadUser = {
  email: string,
  name: string,
}

type TPayload = {
  accessToken: string,
  refreshToken: string,
  user: TPayloadUser,
}

export interface IUserLogin {
  readonly type: typeof USER_LOGIN;
  readonly payload: TPayload;
}
export interface IUserRegister {
  readonly type: typeof USER_REGISTER;
  readonly payload: TPayload;
}
export interface IUserLogout {
  readonly type: typeof USER_LOGOUT;
  readonly payload: TPayload;
}
export interface IUserToken {
  readonly type: typeof USER_TOKEN;
  readonly payload: TPayload;
}
export interface IGetUser {
  readonly type: typeof GET_USER;
  readonly payload: TPayload;
}
export interface IPatchUser {
  readonly type: typeof PATCH_USER;
  readonly payload: TPayload;
}

export type TUserActions = 
  | IUserLogin
  | IUserRegister
  | IUserLogout
  | IUserToken
  | IGetUser
  | IPatchUser;

export const userRegister = (payload: TPayload): IUserRegister => ({ 
  type: USER_REGISTER, 
  payload, 
});
export const userLogin = (payload: TPayload): IUserLogin => ({ 
  type: USER_LOGIN, 
  payload, 
});
export const userToken = (payload: TPayload): IUserToken => ({ 
  type: USER_TOKEN, 
  payload, 
});
export const userLogout = (payload: TPayload): IUserLogout => ({ 
  type: USER_LOGOUT, 
  payload, 
});
export const getUser = (payload: TPayload): IGetUser => ({ 
  type: GET_USER, 
  payload, 
});
export const patchUser = (payload: TPayload): IPatchUser => ({ 
  type: PATCH_USER, 
  payload, 
});