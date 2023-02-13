import type { TBurgerIngredientsActions } from "../actions/burgerIngredientsActions";
import { SET_ORDER_NUMBER } from "../actions/burgerIngredientsActions";

type TModalOrderState = {
  number: number | null,
};

const modalOrderState: TModalOrderState = {
  number: null,
};

export const modalOrderReducer = (state = modalOrderState, action: TBurgerIngredientsActions) => {
  switch (action.type) {
    case SET_ORDER_NUMBER: {
      return {
        ...state,
        number: action.number,
      };
    }
    default:
      return state;
  }
};
