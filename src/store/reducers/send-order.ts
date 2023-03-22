import { request } from "../../utils/fetch";
import { ORDERS_URL } from "../../utils/const";
import { AppDispatch, AppThunk } from "../../utils/types";
import { sendOrder, sendOrderSuccess, setOrderNumber } from "../actions/burgerIngredientsActions";

export const postOrder: AppThunk = (ingredientsID: string[], token: string | null) => {
  return (dispatch: AppDispatch) => {
    dispatch(sendOrder());
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
          const number = res.order.number;
          dispatch(sendOrderSuccess());
          dispatch(setOrderNumber(number));
        }
      })
      .catch((error) => error)
  };
};