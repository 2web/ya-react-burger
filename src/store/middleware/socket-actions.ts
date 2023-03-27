import {
  CONNECTION_START,
  CONNECTION_SUCCESS,
  CONNECTION_ERROR,
  CONNECTION_CLOSED,
  CONNECTION_CLOSE,
  GET_MESSAGE,
  SEND_MESSAGE
} from "./socket-actions-types";

export interface ConnectionStart {
  readonly type: typeof CONNECTION_START;
  readonly payload?: any;
}
export interface ConnectionSuccess {
  readonly type: typeof CONNECTION_SUCCESS;
}
export interface ConnectionError {
  readonly type: typeof CONNECTION_ERROR;
}
export interface ConnectionClosed {
  readonly type: typeof CONNECTION_CLOSED;
}
export interface ConnectionClose {
  readonly type: typeof CONNECTION_CLOSE;
}
export interface GetMessage {
  readonly type: typeof GET_MESSAGE;
  readonly payload: any;
}
export interface SendMessage {
  readonly type: typeof SEND_MESSAGE;
  readonly payload: any;
}

export type TwActions =
  | ConnectionStart
  | ConnectionSuccess
  | ConnectionError
  | ConnectionClosed
  | ConnectionClose
  | GetMessage
  | SendMessage;

export const wsConnectionStart = (payload?: any): ConnectionStart => {
  return {
    type: CONNECTION_START,
    payload,
  };
};
export const wsConnectionSuccess = (): ConnectionSuccess => {
  return {
    type: CONNECTION_SUCCESS,
  };
};
export const wsConnectionError = (): ConnectionError => {
  return {
    type: CONNECTION_ERROR,
  };
};
export const wsConnectionClosed = (): ConnectionClosed => {
  return {
    type: CONNECTION_CLOSED,
  };
};
export const wsConnectionClose = (): ConnectionClose => {
  return {
    type: CONNECTION_CLOSE,
  };
};
export const wsGetMessage = (payload: any): GetMessage => {
  return {
    type: GET_MESSAGE,
    payload,
  };
};
export const wsSendMessage = (payload: any): SendMessage => {
  return {
    type: SEND_MESSAGE,
    payload,
  };
};

export const wActions = {
  wConnectionStart: CONNECTION_START,
  wConnectionSuccess: CONNECTION_SUCCESS,
  wConnectionError: CONNECTION_ERROR,
  wConnectionClosed: CONNECTION_CLOSED,
  wConnectionClose: CONNECTION_CLOSE,
  wGetMessage: GET_MESSAGE,
  wSendMessage: SEND_MESSAGE,
};