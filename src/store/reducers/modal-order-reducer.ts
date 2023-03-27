import {
  SET_ORDER_NUMBER,
  SEND_ORDER_SUCCESS,
  SEND_ORDER,
  TBurgerIngredientsActions,
} from "../actions/burgerIngredientsActions";

type TModalOrderState = {
  number: number | null,
  isLoad: boolean,
};

const modalOrderState: TModalOrderState = {
  number: null,
  isLoad: false,
};

export const modalOrderReducer = (state = modalOrderState, action: TBurgerIngredientsActions) => {
  switch (action.type) {
    case SET_ORDER_NUMBER: {
      return {
        ...state,
        number: action.number,
      };
    }
    case SEND_ORDER: {
      return {
        ...state,
        isLoad: true,
        number: null,
      };
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...state,
        isLoad: false,
      };
    }
    default:
      return state;
  }
};
