import { SET_ORDER } from "../actions";

const modalOrderState = {
  number: null,
};

export const modalOrderReducer = (state = modalOrderState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        number: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setOrderNumber = (payload) => ({
  type: SET_ORDER,
  payload,
});
