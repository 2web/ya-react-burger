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
