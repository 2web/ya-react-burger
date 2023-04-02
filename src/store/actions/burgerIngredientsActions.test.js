import {
  loadIngredientsRequest,
  loadIngredientsSuccess,
  loadIngredientsError,
  updateIngredients,
  setConstructorIngredients,
  updateConstructorIngredients,
  delConstructorIngredients,
  setConstructorBun,
  setConstructorPrice,
  setOrderNumber,
  setCurrentIngredients,
  LOAD_INGREDIENTS_REQUEST,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
  UPDATE_INGREDIENTS,
  SET_CONSTRUCTOR_INGREDIENTS,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  DEL_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR_BUN,
  SET_CONSTRUCTOR_PRICE,
  SET_ORDER_NUMBER,
  SET_CURRENT_INGREDIENT,
  sendOrder,
  SEND_ORDER,
  sendOrderSuccess,
  SEND_ORDER_SUCCESS,
  delCurrentIngredient,
  DEL_CURRENT_INGREDIENT,
} from "./burgerIngredientsActions";

describe("loadIngredientsRequest", () => {
  it("should return an object with type LOAD_INGREDIENTS_REQUEST and isLoading boolean", () => {
    const isLoading = true;
    const expectedAction = {
      type: LOAD_INGREDIENTS_REQUEST,
      isLoading,
    };
    const action = loadIngredientsRequest(isLoading);
    expect(action).toEqual(expectedAction);
  });
});

describe("loadIngredientsSuccess", () => {
  it("should return an object with type LOAD_INGREDIENTS_SUCCESS and ingredients array", () => {
    const ingredients = [
      { id: 1, name: "Ingredient 1" },
      { id: 2, name: "Ingredient 2" },
    ];
    const expectedAction = {
      type: LOAD_INGREDIENTS_SUCCESS,
      ingredients,
    };
    // @ts-ignore
    const action = loadIngredientsSuccess(ingredients);
    expect(action).toEqual(expectedAction);
  });
});

describe("loadIngredientsError", () => {
  it("should return an object with type LOAD_INGREDIENTS_ERROR and isError boolean", () => {
    const isError = true;
    const expectedAction = {
      type: LOAD_INGREDIENTS_ERROR,
      isError,
    };
    const action = loadIngredientsError(isError);
    expect(action).toEqual(expectedAction);
  });
});

describe("updateIngredients", () => {
  it("should return an object with type UPDATE_INGREDIENTS and ingredients array", () => {
    const ingredients = [
      { id: 1, name: "Ingredient 1" },
      { id: 2, name: "Ingredient 2" },
    ];
    const expectedAction = {
      type: UPDATE_INGREDIENTS,
      ingredients,
    };
    // @ts-ignore
    const action = updateIngredients(ingredients);
    expect(action).toEqual(expectedAction);
  });
});

describe("setConstructorIngredients", () => {
  it("should return an object with type SET_CONSTRUCTOR_INGREDIENTS and ingredient object", () => {
    const ingredient = { id: 1, name: "Ingredient 1" };
    const expectedAction = {
      type: SET_CONSTRUCTOR_INGREDIENTS,
      ingredient,
    };
    // @ts-ignore
    const action = setConstructorIngredients(ingredient);
    expect(action).toEqual(expectedAction);
  });
});

describe("updateConstructorIngredients", () => {
  it("should return an object with type UPDATE_CONSTRUCTOR_INGREDIENTS and ingredients array", () => {
    const ingredients = [
      { id: 1, name: "Ingredient 1" },
      { id: 2, name: "Ingredient 2" },
    ];
    const expectedAction = {
      type: UPDATE_CONSTRUCTOR_INGREDIENTS,
      ingredients,
    };
    // @ts-ignore
    const action = updateConstructorIngredients(ingredients);
    expect(action).toEqual(expectedAction);
  });
});

describe("delConstructorIngredients", () => {
  it("should return an object with type DEL_CONSTRUCTOR_INGREDIENTS and current index number", () => {
    const currentIndex = 1;
    const expectedAction = {
      type: DEL_CONSTRUCTOR_INGREDIENTS,
      curentIndex: currentIndex,
    };
    const action = delConstructorIngredients(currentIndex);
    expect(action).toEqual(expectedAction);
  });
});

describe("setConstructorBun", () => {
  it("should return an object with type SET_CONSTRUCTOR_BUN and constructorBun value", () => {
    const constructorBun = { id: 1, name: "Bun 1", type: "bun" };
    const expectedAction = {
      type: SET_CONSTRUCTOR_BUN,
      constructorBun,
    };
    // @ts-ignore
    const action = setConstructorBun(constructorBun);
    expect(action).toEqual(expectedAction);
  });
});

describe("setConstructorPrice", () => {
  it("should return an object with type SET_CONSTRUCTOR_PRICE and thisTotalSumm value", () => {
    const thisTotalSumm = 10;
    const expectedAction = {
      type: SET_CONSTRUCTOR_PRICE,
      thisTotalSumm,
    };
    const action = setConstructorPrice(thisTotalSumm);
    expect(action).toEqual(expectedAction);
  });
});

describe("setOrderNumber", () => {
  it("should return an object with type SET_ORDER_NUMBER and number value", () => {
    const number = 12345;
    const expectedAction = {
      type: SET_ORDER_NUMBER,
      number,
    };
    const action = setOrderNumber(number);
    expect(action).toEqual(expectedAction);
  });
});

describe("setCurrentIngredients", () => {
  it("should return an object with type SET_CURRENT_INGREDIENT and currentIngredient value", () => {
    const currentIngredient = { id: 1, name: "Ingredient 1" };
    const expectedAction = {
      type: SET_CURRENT_INGREDIENT,
      currentIngredient,
    };
    const action = setCurrentIngredients(currentIngredient);
    expect(action).toEqual(expectedAction);
  });
});

describe("sendOrder", () => {
  it("should return an object with type SEND_ORDER", () => {
    const expectedAction = {
      type: SEND_ORDER,
    };
    const action = sendOrder();
    expect(action).toEqual(expectedAction);
  });
});

describe("sendOrderSuccess", () => {
  it("should return an object with type SEND_ORDER_SUCCESS", () => {
    const expectedAction = {
      type: SEND_ORDER_SUCCESS,
    };
    const action = sendOrderSuccess();
    expect(action).toEqual(expectedAction);
  });
});

describe("delCurrentIngredient", () => {
  it("should return an object with type DEL_CURRENT_INGREDIENT", () => {
    const expectedAction = {
      type: DEL_CURRENT_INGREDIENT,
    };
    const action = delCurrentIngredient();
    expect(action).toEqual(expectedAction);
  });
});
