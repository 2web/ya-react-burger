import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, RootState } from "../../utils/types";
import type { wActions} from "./socket-actions"

export const socketMiddleware = (wsUrl: string, wsActions: typeof wActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: any) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wConnectionStart,
        wSendMessage,
        wConnectionSuccess,
        wConnectionClosed,
        wConnectionError,
        wGetMessage,
        wConnectionClose,
      } = wsActions;
      const { accessToken } = getState().userReducer;

      if (type === wConnectionStart) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: wConnectionSuccess, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: wConnectionError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: wGetMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: wConnectionClosed, payload: event });
        };

        if (type === wConnectionClose) {
          socket.close(1000, "job complete");
        }

        if (type === wSendMessage) {
          const message = payload;
          message["token"] = accessToken;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};