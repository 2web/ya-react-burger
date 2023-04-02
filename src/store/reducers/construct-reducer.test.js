import { constructorReducer } from "./construct-reducer";
import * as types from "../actions/burgerIngredientsActions";

describe("td modalIngredientReducer", () => {
  it("return the initial state", () => {
    expect(constructorReducer(undefined, {})).toEqual({
      constructorIngredients: [],
      constructorBun: null,
      totalConstructorPrice: 0,
    });
  });

  it("should handle SET_CONSTRUCTOR_INGREDIENTS", () => {
    expect(
        constructorReducer(
        {
          constructorIngredients: [],
        },
        {
          type: types.SET_CONSTRUCTOR_INGREDIENTS,
          ingredient: { ingr: "ingr1" },
        }
      )
    ).toEqual({
      constructorIngredients: [{ ingr: "ingr1" }],
    });

    expect(
        constructorReducer(
        {
          constructorIngredients: [{ ingr: "ingr1" }, { ingr: "ingr2" }],
          constructorBun: null,
          totalConstructorPrice: 0,
        },
        {
          type: types.SET_CONSTRUCTOR_INGREDIENTS,
          ingredient: { ingr: "ingr3" },
        }
      )
    ).toEqual({
      constructorIngredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
      constructorBun: null,
      totalConstructorPrice: 0,
    });
  });

  it("handle UPDATE_CONSTRUCTOR_INGREDIENTS", () => {
    expect(
        constructorReducer(
        {},
        {
          type: types.UPDATE_CONSTRUCTOR_INGREDIENTS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      constructorIngredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
    });

    expect(
        constructorReducer(
        {
          constructorIngredients: [
            { ingr: "ingr3" },
            { ingr: "ingr2" },
            { ingr: "ingr1" },
          ],
          constructorBun: null,
          totalConstructorPrice: 0,
        },
        {
          type: types.UPDATE_CONSTRUCTOR_INGREDIENTS,
          ingredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
        }
      )
    ).toEqual({
      constructorIngredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
      constructorBun: null,
      totalConstructorPrice: 0,
    });
  });

  it("should handle DEL_CONSTRUCTOR_INGREDIENTS", () => {
    expect(
        constructorReducer(
        {
          constructorIngredients: [],
        },
        {
          type: types.DEL_CONSTRUCTOR_INGREDIENTS,
          curentIndex: 1,
        }
      )
    ).toEqual({
      constructorIngredients: [],
    });

    expect(
        constructorReducer(
        {
          constructorIngredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
          constructorBun: null,
          totalConstructorPrice: 0,
        },
        {
          type: types.DEL_CONSTRUCTOR_INGREDIENTS,
          curentIndex: 1,
        }
      )
    ).toEqual({
      constructorIngredients: [{ ingr: "ingr1" }, { ingr: "ingr3" }],
      constructorBun: null,
      totalConstructorPrice: 0,
    });
  });

  it("handle SET_CONSTRUCTOR_BUN", () => {
    expect(
        constructorReducer(
        {},
        {
          type: types.SET_CONSTRUCTOR_BUN,
          constructorBun: "constructorBun",
        }
      )
    ).toEqual({
      constructorBun: "constructorBun",
    });

    expect(
        constructorReducer(
        {
          constructorIngredients: [
            { ingr: "ingr1" },
            { ingr: "ingr2" },
            { ingr: "ingr3" },
          ],
          constructorBun: "constructorBunDefault",
          totalConstructorPrice: 0,
        },
        {
          type: types.SET_CONSTRUCTOR_BUN,
          constructorBun: "constructorBun",
        }
      )
    ).toEqual({
      constructorIngredients: [
        { ingr: "ingr1" },
        { ingr: "ingr2" },
        { ingr: "ingr3" },
      ],
      constructorBun: "constructorBun",
      totalConstructorPrice: 0,
    });
  });

  it("should handle SET_CONSTRUCTOR_PRICE", () => {
    expect(
        constructorReducer(
        {},
        {
          type: types.SET_CONSTRUCTOR_PRICE,
          thisTotalSumm: 123,
        }
      )
    ).toEqual({
      totalConstructorPrice: 123,
    });

    expect(
        constructorReducer(
        {
          constructorIngredients: [
            { ingr: "ingr3" },
            { ingr: "ingr2" },
            { ingr: "ingr1" },
          ],
          constructorBun: "constructorBunDefault",
          totalConstructorPrice: 321,
        },
        {
          type: types.SET_CONSTRUCTOR_PRICE,
          thisTotalSumm: 123,
        }
      )
    ).toEqual({
      constructorIngredients: [
        { ingr: "ingr3" },
        { ingr: "ingr2" },
        { ingr: "ingr1" },
      ],
      constructorBun: "constructorBunDefault",
      totalConstructorPrice: 123,
    });
  });
});
