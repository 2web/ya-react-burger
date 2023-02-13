import { request } from "../../utils/fetch";
import { ORDERS_URL } from "../../utils/const";
import { AppDispatch, AppThunk } from "../../utils/types";
import { setOrderNumber } from "../actions/burgerIngredientsActions";

export const postOrder: AppThunk = (ingredientsID: string[], token: string | null) => {
  return (dispatch: AppDispatch) => {
    request(ORDERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: token,
      },
      body: JSON.stringify({ ingredients: ingredientsID }),
    })
      .then((res:any) => {
        if (res.success) {
          dispatch(setOrderNumber(res.order.number as number))
        }
      })
      .catch((error) => error)
  };
};