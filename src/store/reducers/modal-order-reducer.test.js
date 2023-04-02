import { modalOrderReducer } from "./modal-order-reducer";
import * as types from "../actions/burgerIngredientsActions";

describe("todos modalOrderReduser", () => {
  it("return the initial state", () => {
    expect(modalOrderReducer(undefined, {})).toEqual({
      number: null,
      isLoad: false,
    });
  });

  it("handle SET_ORDER_NUMBER", () => {
    expect(
        modalOrderReducer(
        {},
        {
          type: types.SET_ORDER_NUMBER,
          number: 111,
        }
      )
    ).toEqual({
      number: 111,
    });

    expect(
        modalOrderReducer(
        {
          number: 111,
          isLoad: false,
        },
        {
          type: types.SET_ORDER_NUMBER,
          number: 111,
        }
      )
    ).toEqual({
      number: 111,
      isLoad: false,
    });
  });

  it("handle SEND_ORDER", () => {
    expect(
        modalOrderReducer(
        {},
        {
          type: types.SEND_ORDER,
        }
      )
    ).toEqual({
      isLoad: true,
      number: null,
    });

    expect(
        modalOrderReducer(
        {
          number: 111,
          isLoad: false,
        },
        {
          type: types.SEND_ORDER,
        }
      )
    ).toEqual({
      isLoad: true,
      number: null,
    });
  });

  it("handle SEND_ORDER_SUCCESS", () => {
    expect(
        modalOrderReducer(
        {},
        {
          type: types.SEND_ORDER_SUCCESS,
        }
      )
    ).toEqual({
      isLoad: false,
    });

    expect(
        modalOrderReducer(
        {
          number: 111,
          isLoad: true,
        },
        {
          type: types.SEND_ORDER_SUCCESS,
        }
      )
    ).toEqual({
      number: 111,
      isLoad: false,
    });
  });
});
