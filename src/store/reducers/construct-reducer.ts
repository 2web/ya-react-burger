import { IDrgagItem, IIngredientItem } from '../../utils/types';
import type { TBurgerIngredientsActions } from '../actions/burgerIngredientsActions';
import {
  SET_CONSTRUCTOR_INGREDIENTS,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  DEL_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR_BUN,
  SET_CONSTRUCTOR_PRICE,
} from "../actions/burgerIngredientsActions";

type TConstructorState = {
  constructorIngredients: IDrgagItem[],
  constructorBun: IIngredientItem | null,
  totalConstructorPrice: number,
};

const constructorState: TConstructorState = {
  constructorIngredients: [],
  constructorBun: null,
  totalConstructorPrice: 0,
};

export const constructorReducer = (
  state = constructorState,
  action: TBurgerIngredientsActions
) => {
  switch (action.type) {
    case SET_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.ingredient,
        ],
      };
    }
    case UPDATE_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        constructorIngredients: action.ingredients,
      };
    }
    case DEL_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients].filter(
          (el, index) => index !== action.curentIndex
        ),
      };
    }
    case SET_CONSTRUCTOR_BUN: {
      return {
        ...state,
        constructorBun: action.constructorBun,
      };
    }
    case SET_CONSTRUCTOR_PRICE: {
      return {
        ...state,
        totalConstructorPrice: action.thisTotalSumm,
      };
    }
    default:
      return state;
  }
};
