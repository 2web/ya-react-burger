import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store/';
import { TBurgerIngredientsActions } from '../store/actions/burgerIngredientsActions';
import { TUserActions } from '../store/actions/userActions';
import { TwActions } from '../store/middleware/socket-actions';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = 
  | TUserActions
  | TBurgerIngredientsActions
  | TwActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;

export interface IIngredientItem {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IDrgagItem extends IIngredientItem {
  dragId?: string;
  index?: number;
  id?: number;
  count?: number;
}

export type Titem = {
  dragId?: string;
};

export type TburgerIngredientsState = {
  isLoading: boolean;
  isError: boolean;
  ingredients: IIngredientItem[];
};

export type TmodalIngredientState = {
  currentIngredient: IIngredientItem | null;
};

export type TmodalOrderState = {
  number: number | null;
};

export type TuserState = {
  accessToken: string | null;
  email: string;
  name: string;
};

export type TingredientType = {
  [name: string]: string;
};

export type TConstructorDraggableIngredient = {
  index: number;
  item: IDrgagItem;
  handleClose: Function;
  moveCard: Function;
}

export type TOrders = {
  createdAt: string;
  updatedAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  _id: string;
}