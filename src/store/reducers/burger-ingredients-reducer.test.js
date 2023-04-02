import { burgerIngredientsReducer } from "./burger-ingredients-reducer";
import * as types from "../actions/burgerIngredientsActions";

describe("td burgerIngredientsReducer", () => {
  it("return the initial state", () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      ingredients: [],
    });
  });

  it("handle LOAD_INGREDIENTS_REQUEST", () => {
    expect(
      burgerIngredientsReducer(
        {},
        {
          type: types.LOAD_INGREDIENTS_REQUEST,
          isLoading: true,
        }
      )
    ).toEqual({
      isLoading: true,
    });

    expect(
      burgerIngredientsReducer(
        {
          isLoading: false,
          isError: false,
          ingredients: [],
        },
        {
          type: types.LOAD_INGREDIENTS_REQUEST,
          isLoading: true,
        }
      )
    ).toEqual({
      isLoading: true,
      isError: false,
      ingredients: [],
    });
  });

  it("handle LOAD_INGREDIENTS_SUCCESS", () => {
    expect(
      burgerIngredientsReducer(
        {},
        {
          type: types.LOAD_INGREDIENTS_SUCCESS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      ingredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
    });

    expect(
      burgerIngredientsReducer(
        {
          isLoading: false,
          isError: false,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        },
        {
          type: types.LOAD_INGREDIENTS_SUCCESS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      isLoading: false,
      isError: false,
      ingredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
    });
  });

  it("handle LOAD_INGREDIENTS_ERROR", () => {
    expect(
      burgerIngredientsReducer(
        {},
        {
          type: types.LOAD_INGREDIENTS_ERROR,
          isError: true,
        }
      )
    ).toEqual({
      isError: true,
    });

    expect(
      burgerIngredientsReducer(
        {
          isLoading: false,
          isError: false,
          ingredients: [],
        },
        {
          type: types.LOAD_INGREDIENTS_ERROR,
          isError: true,
        }
      )
    ).toEqual({
      isLoading: false,
      isError: true,
      ingredients: [],
    });
  });

  it("handle UPDATE_INGREDIENTS", () => {
    expect(
      burgerIngredientsReducer(
        {},
        {
          type: types.UPDATE_INGREDIENTS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      ingredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
    });

    expect(
      burgerIngredientsReducer(
        {
          isLoading: false,
          isError: false,
          ingredients: [
            { ingr: "ingr3" },
            { ingr: "ingr2" },
            { ingr: "ingr1" },
          ],
        },
        {
          type: types.UPDATE_INGREDIENTS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      isLoading: false,
      isError: false,
      ingredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
    });
  });
});
