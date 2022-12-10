import {
  LOAD_INGREDIENTS_REQUEST,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
  UPDATE_INGREDIENTS,
} from "../actions";

const burgerIngredientsState = {
  isLoading: false,
  isError: false,
  ingredients: [],
};

export const burgerIngredientsReducer = (
  state = burgerIngredientsState,
  action
) => {
  switch (action.type) {
    case LOAD_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case LOAD_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case LOAD_INGREDIENTS_ERROR: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case UPDATE_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    default:
      return state;
  }
};

