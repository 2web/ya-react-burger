import { modalIngredientReducer } from "./modal-ingredients-reducer";
import * as types from "../actions/burgerIngredientsActions";

describe("td modalIngredientReducer", () => {
  it("should return the initial state", () => {
    expect(modalIngredientReducer(undefined, {})).toEqual({
      currentIngredient: null,
    });
  });

  it("handle SET_CURRENT_INGREDIENT", () => {
    expect(
        modalIngredientReducer(
        {},
        {
          type: types.SET_CURRENT_INGREDIENT,
          currentIngredient: "IngredientObject",
        }
      )
    ).toEqual({
      currentIngredient: "IngredientObject",
    });

    expect(
        modalIngredientReducer(
        {
          currentIngredient: "IngredientObjectDefault",
        },
        {
          type: types.SET_CURRENT_INGREDIENT,
          currentIngredient: "Object",
        }
      )
    ).toEqual({
      currentIngredient: "Object",
    });
  });

  it("handle DEL_CURRENT_INGREDIENT", () => {
    expect(
        modalIngredientReducer(
        {},
        {
          type: types.DEL_CURRENT_INGREDIENT,
        }
      )
    ).toEqual({
      currentIngredient: null,
    });

    expect(
        modalIngredientReducer(
        {
          currentIngredient: "IngredientObjectDefault",
        },
        {
          type: types.DEL_CURRENT_INGREDIENT,
        }
      )
    ).toEqual({
      currentIngredient: null,
    });
  });
});
