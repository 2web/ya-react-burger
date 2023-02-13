import type { TBurgerIngredientsActions } from '../actions/burgerIngredientsActions';
import type { IDrgagItem } from '../../utils/types';
import {
  LOAD_INGREDIENTS_REQUEST,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
  UPDATE_INGREDIENTS,
} from "../actions/burgerIngredientsActions";

type TBurgerIngredientsState = {
  isLoading: boolean,
  isError: boolean,
  ingredients: IDrgagItem[],
} 

const burgerIngredientsState: TBurgerIngredientsState = {
  isLoading: false,
  isError: false,
  ingredients: [],
};

export const burgerIngredientsReducer = (
  state = burgerIngredientsState,
  action: TBurgerIngredientsActions
) => {
  switch (action.type) {
    case LOAD_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case LOAD_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
      };
    }
    case LOAD_INGREDIENTS_ERROR: {
      return {
        ...state,
        isError: action.isError,
      };
    }
    case UPDATE_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
      };
    }
    default:
      return state;
  }
};

