import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./reducers/burger-ingredients-reducer";
import { constructorReducer } from "./reducers/construct-reducer";

import { modalIngredientReducer } from "./reducers/modal-ingredients-reducer";
import { modalOrderReducer } from "./reducers/modal-order-reducer";

import { userReducer } from "./reducers/user-reducer";

import { wReducer } from "./middleware/socket-reducers"

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  constructorReducer,
  modalIngredientReducer,
  modalOrderReducer,
  userReducer,
  wReducer
});

export type TState = ReturnType<typeof rootReducer>