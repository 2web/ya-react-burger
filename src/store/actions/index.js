export const LOAD_INGREDIENTS_REQUEST = "LOAD_INGREDIENTS_REQUEST";
export const LOAD_INGREDIENTS_SUCCESS = "LOAD_INGREDIENTS_SUCCESS";
export const LOAD_INGREDIENTS_ERROR = "LOAD_INGREDIENTS_ERROR";
export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

export const SET_CONSTRUCTOR_INGREDIENTS = "SET_CONSTRUCTOR_INGREDIENTS";
export const UPDATE_CONSTRUCTOR_INGREDIENTS = "UPDATE_CONSTRUCTOR_INGREDIENTS";
export const DEL_CONSTRUCTOR_INGREDIENTS = "DEL_CONSTRUCTOR_INGREDIENTS";
export const SET_CONSTRUCTOR_BUN = "SET_CONSTRUCTOR_BUN";
export const SET_CONSTRUCTOR_PRICE = "SET_CONSTRUCTOR_PRICE";

export const SET_ORDER = "SET_ORDER";
export const DEL_CURRENT_INGREDIENT = "DEL_CURRENT_INGREDIENT";

export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_TOKEN = "USER_TOKEN";
export const GET_USER = "GET_USER";
export const PATCH_USER = "PATCH_USER";

export const setOrderNumber = (payload) => ({
  type: SET_ORDER,
  payload,
});

export const loadIngredientsRequest = (payload) => ({
  type: LOAD_INGREDIENTS_REQUEST,
  payload,
});
export const loadIngredientsSuccess = (payload) => ({
  type: LOAD_INGREDIENTS_SUCCESS,
  payload,
});
export const loadIngredientsError = (payload) => ({
  type: LOAD_INGREDIENTS_ERROR,
  payload,
});

export const userRegister = (payload) => ({ 
  type: USER_REGISTER, 
  payload, 
});
export const userLogin = (payload) => ({ 
  type: USER_LOGIN, 
  payload, 
});
export const userToken = (payload) => ({ 
  type: USER_TOKEN, 
  payload, 
});
export const userLogout = (payload) => ({ 
  type: USER_LOGOUT, 
  payload, 
});
export const getUser = (payload) => ({ 
  type: GET_USER, 
  payload, 
});
export const patchUser = (payload) => ({ 
  type: PATCH_USER, 
  payload, 
});