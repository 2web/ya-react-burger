import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhance = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhance);
