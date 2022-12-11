import { SET_CURRENT_INGREDIENT, DEL_CURRENT_INGREDIENT } from "../actions";

const modalIngredientState = {
  currentIngredient: null,
};

export const modalIngredientReducer = (
  state = modalIngredientState,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.ingredient,
      };
    }
    case DEL_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: null,
      };
    }
    default:
      return state;
  }
};
