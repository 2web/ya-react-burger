import PropTypes from "prop-types";

export const ingredientTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number,
});

export const BREAD = "bun";
export const SAUCE = "sauce";
export const FILLING = "main";

export const CAL_TITLE = "Калорий,ккал";
export const PR_TITLE = "Белки,г";
export const FA_TITLE = "Жиры,г";
export const CAR_TITLE = "Углеводы,г";

const URL = "https://norma.nomoreparties.space/api/";
export const ING_URL = `${URL}ingredients`;
export const ORDERS_URL = `${URL}orders`;
export const REGISTER_URL = `${URL}auth/register`;
export const LOGIN_URL = `${URL}auth/login`;
export const TOKEN_URL = `${URL}auth/token`;
export const LOGOUT_URL = `${URL}auth/logout`;
export const GET_USER_URL = `${URL}auth/user`;
export const PASSWORD_URL = `${URL}password-reset`;
export const PASSWORD_RESET_URL = `${PASSWORD_URL}/reset`;

export const INGREDIENT_TYPE = { bun: "Булка", main: "Начинки", sauce: "Соус" };
