import { request } from "./fetch";
import { ING_URL, INGREDIENT_TYPE } from "./const";
import {
  loadIngredientsRequest,
  loadIngredientsSuccess,
  loadIngredientsError,
} from "../store/actions/burgerIngredientsActions";
import { AppDispatch } from "./types";

export const getIngredients = () => {
  return (dispatch: AppDispatch) => {
    dispatch(loadIngredientsRequest(true));
    request(ING_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((responseResult: any) => {
        const responseResultData = responseResult.data;

        if (INGREDIENT_TYPE) {
          responseResultData.map((card: { type: string; }) => {
            const curentType = card.type;

            for (const key in INGREDIENT_TYPE) {
              if (curentType === key) {
                card.type = INGREDIENT_TYPE[key];
              }
            }
            return card;
          });
        }

        dispatch(loadIngredientsRequest(false));
        dispatch(loadIngredientsSuccess(responseResultData));
      })
      .catch((error) => {
        dispatch(loadIngredientsRequest(false));
        dispatch(loadIngredientsError(true));
      });
  };
};