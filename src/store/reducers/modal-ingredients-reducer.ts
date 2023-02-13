import { IIngredientItem } from '../../utils/types';
import type { TBurgerIngredientsActions } from "../actions/burgerIngredientsActions";
import {
  SET_CURRENT_INGREDIENT,
  DEL_CURRENT_INGREDIENT,
} from "../actions/burgerIngredientsActions";

type TModalIngredientState = {
  currentIngredient: IIngredientItem | null,
};

const modalIngredientState: TModalIngredientState = {
  currentIngredient: null,
};

export const modalIngredientReducer = (
  state = modalIngredientState,
  action: TBurgerIngredientsActions
) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.currentIngredient,
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
