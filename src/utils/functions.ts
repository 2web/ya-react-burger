export const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default random;

export const getOrder = (store) => store.modalOrderReducer;
export const getOrderNumber = (store) => store.modalOrderReducer.number;
export const getUser = (store) => store.userReducer;
export const getToken = (store) => store.userReducer.accessToken;
export const getLoad = (store) => store.modalOrderReducer.isLoad;

export const getConstrIngredients = (store) => store.constructorReducer.constructorIngredients;
export const getConstrBun = (store) => store.constructorReducer.constructorBun;
export const getTotalConstrPrice = (store) => store.constructorReducer.totalConstructorPrice;

export const getBurgerIngredientsReducer = (store) => store.burgerIngredientsReducer;
export const getBurgerIngredientsReducerIng = (store) => store.burgerIngredientsReducer.ingredients;


export const getwsReducerMessages = (store) => store.wReducer.messages;