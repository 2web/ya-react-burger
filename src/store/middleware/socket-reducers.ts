import { TwActions } from "./socket-actions";
import {
  CONNECTION_SUCCESS,
  CONNECTION_ERROR,
  CONNECTION_CLOSED,
  CONNECTION_CLOSE,
  GET_MESSAGE,
} from "./socket-actions-types";

type TWSState = {
  wsConnected: boolean;
  messages: any;
  error?: Event;
};

const initialState: TWSState = {
  wsConnected: false,
  messages: null,
};

export const wReducer = (state = initialState, action: TwActions) => {
  switch (action.type) {
    case CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        messages: null,
      };

    case GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        messages: action.payload,
      };

    default:
      return state;
  }
};