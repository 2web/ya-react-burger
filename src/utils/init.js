import { request } from "../utils/fetch";
import { ING_URL, INGREDIENT_TYPE } from "../utils/const";
import {
  loadIngredientsRequest,
  loadIngredientsSuccess,
  loadIngredientsError,
} from "../store/actions";

export const getIngredients = () => {
  return (dispatch) => {
    dispatch(loadIngredientsRequest(true));
    request(ING_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((responseResult) => {
        const responseResultData = responseResult.data;

        if (INGREDIENT_TYPE) {
          responseResultData.map((card) => {
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
