import { request } from "../utils/fetch";
import { ORDERS_URL } from "../utils/const";
import { setOrderNumber } from "../store/actions";

export const postOrder = (ingredientsID) => {
  return (dispatch) => {
    request(ORDERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients: ingredientsID }),
    })
      .then(res => {
        if (res.success) {
          dispatch(setOrderNumber(res.order.number))
        }
      })
      .catch((error) => error)
  };
};