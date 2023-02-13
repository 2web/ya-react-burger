import { IDrgagItem, IIngredientItem } from "../../utils/types";

export const LOAD_INGREDIENTS_REQUEST: "LOAD_INGREDIENTS_REQUEST" =
  "LOAD_INGREDIENTS_REQUEST";
export const LOAD_INGREDIENTS_SUCCESS: "LOAD_INGREDIENTS_SUCCESS" =
  "LOAD_INGREDIENTS_SUCCESS";
export const LOAD_INGREDIENTS_ERROR: "LOAD_INGREDIENTS_ERROR" =
  "LOAD_INGREDIENTS_ERROR";
export const UPDATE_INGREDIENTS: "UPDATE_INGREDIENTS" = "UPDATE_INGREDIENTS";
export const SET_CONSTRUCTOR_INGREDIENTS: "SET_CONSTRUCTOR_INGREDIENTS" =
  "SET_CONSTRUCTOR_INGREDIENTS";
export const UPDATE_CONSTRUCTOR_INGREDIENTS: "UPDATE_CONSTRUCTOR_INGREDIENTS" =
  "UPDATE_CONSTRUCTOR_INGREDIENTS";
export const DEL_CONSTRUCTOR_INGREDIENTS: "DEL_CONSTRUCTOR_INGREDIENTS" =
  "DEL_CONSTRUCTOR_INGREDIENTS";
export const SET_CONSTRUCTOR_BUN: "SET_CONSTRUCTOR_BUN" = "SET_CONSTRUCTOR_BUN";
export const SET_CONSTRUCTOR_PRICE: "SET_CONSTRUCTOR_PRICE" =
  "SET_CONSTRUCTOR_PRICE";
export const SET_ORDER_NUMBER: "SET_ORDER_NUMBER" = "SET_ORDER_NUMBER";
export const SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT" =
  "SET_CURRENT_INGREDIENT";
export const DEL_CURRENT_INGREDIENT: "DEL_CURRENT_INGREDIENT" =
  "DEL_CURRENT_INGREDIENT";

export interface ILoadIngredientsRequest {
  readonly type: typeof LOAD_INGREDIENTS_REQUEST;
  readonly isLoading: boolean;
}
export interface ILoadIngredientsSuccess {
  readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
  readonly ingredients: IDrgagItem[];
}
export interface ILoadIngredientsError {
  readonly type: typeof LOAD_INGREDIENTS_ERROR;
  readonly isError: boolean;
}
export interface IUpdateIngredients {
  readonly type: typeof UPDATE_INGREDIENTS;
  readonly ingredients: IDrgagItem[];
}
export interface ISetConstructorIngredients {
  readonly type: typeof SET_CONSTRUCTOR_INGREDIENTS;
  readonly ingredient: IDrgagItem;
}
export interface IUpdateConstructorIngredients {
  readonly type: typeof UPDATE_CONSTRUCTOR_INGREDIENTS;
  readonly ingredients: IDrgagItem[];
}
export interface IDelConstructorIngredients {
  readonly type: typeof DEL_CONSTRUCTOR_INGREDIENTS;
  readonly curentIndex: number;
}
export interface ISetConstructorBun {
  readonly type: typeof SET_CONSTRUCTOR_BUN;
  readonly constructorBun: IIngredientItem | null;
}
export interface ISetConstructorPrice {
  readonly type: typeof SET_CONSTRUCTOR_PRICE;
  readonly thisTotalSumm: number;
}
export interface ISetOrderNumber {
  readonly type: typeof SET_ORDER_NUMBER;
  readonly number: number | null;
}
export interface ISetCurrentIngredients {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly currentIngredient: IDrgagItem;
}
export interface IDelCurrentIngredient {
  readonly type: typeof DEL_CURRENT_INGREDIENT;
}

export type TBurgerIngredientsActions =
  | ILoadIngredientsRequest
  | ILoadIngredientsSuccess
  | ILoadIngredientsError
  | IUpdateIngredients
  | ISetCurrentIngredients
  | IUpdateConstructorIngredients
  | ISetConstructorIngredients
  | IDelConstructorIngredients
  | ISetConstructorBun
  | ISetConstructorPrice
  | ISetOrderNumber
  | IDelCurrentIngredient;

export const loadIngredientsRequest = (
  isLoading: boolean
): ILoadIngredientsRequest => ({ type: LOAD_INGREDIENTS_REQUEST, isLoading });
export const loadIngredientsSuccess = (
  ingredients: IDrgagItem[]
): ILoadIngredientsSuccess => ({ type: LOAD_INGREDIENTS_SUCCESS, ingredients });
export const loadIngredientsError = (
  isError: boolean
): ILoadIngredientsError => ({ type: LOAD_INGREDIENTS_ERROR, isError });
export const updateIngredients = (
  ingredients: IDrgagItem[]
): IUpdateIngredients => ({ type: UPDATE_INGREDIENTS, ingredients });

export const setConstructorIngredients = (
  ingredient: IDrgagItem
): ISetConstructorIngredients => ({
  type: SET_CONSTRUCTOR_INGREDIENTS,
  ingredient,
});
export const updateConstructorIngredients = (
  ingredients: IDrgagItem[]
): IUpdateConstructorIngredients => ({
  type: UPDATE_CONSTRUCTOR_INGREDIENTS,
  ingredients,
});
export const delConstructorIngredients = (
  curentIndex: number
): IDelConstructorIngredients => ({
  type: DEL_CONSTRUCTOR_INGREDIENTS,
  curentIndex,
});
export const setConstructorBun = (
  constructorBun: IIngredientItem | null
): ISetConstructorBun => ({ type: SET_CONSTRUCTOR_BUN, constructorBun });
export const setConstructorPrice = (
  thisTotalSumm: number
): ISetConstructorPrice => ({ type: SET_CONSTRUCTOR_PRICE, thisTotalSumm });

export const setOrderNumber = (number: number | null): ISetOrderNumber => ({
  type: SET_ORDER_NUMBER,
  number,
});

export const setCurrentIngredients = (
  currentIngredient: any
): ISetCurrentIngredients => ({
  type: SET_CURRENT_INGREDIENT,
  currentIngredient,
});
export const delCurrentIngredient = (): IDelCurrentIngredient => ({
  type: DEL_CURRENT_INGREDIENT,
});
