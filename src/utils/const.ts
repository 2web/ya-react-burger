import { TingredientType } from "./types";

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

export const INGREDIENT_TYPE: TingredientType = { bun: "Булка", main: "Начинки", sauce: "Соус" };

export const ROUTE_HOME = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_REGISTER = "/register";
export const ROUTE_FORGOT_PASS = "/forgot-password";
export const ROUTE_RESET_PASS = "/reset-password";
export const ROUTE_ING_ID = "/ingredients/:id";
export const ROUTE_PROFILE = "/profile";
export const ROUTE_PROFILE_ORDERS = "/profile/orders";
export const ROUTE_PROFILE_ORDERS_ID = "/profile/orders/:id";
export const ROUTE_FEED = "/feed";
export const ROUTE_FEED_ID = "/feed/:id";


export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";