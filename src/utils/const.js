import PropTypes from 'prop-types';

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
    __v: PropTypes.number
})

export const BREAD = "bun"
export const SAUCE = "sauce"
export const FILLING = "main"

export const CAL_TITLE = "Калорий,ккал"
export const PR_TITLE = "Белки, г"
export const FA_TITLE = "Жиры, г"
export const CAR_TITLE = "Углеводы, г"

export const URL = "https://norma.nomoreparties.space/api/";
export const ING = "ingredients";
export const ORDER = "orders";