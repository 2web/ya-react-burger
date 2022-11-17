import PropTypes from 'prop-types';

export const ingredientItem = PropTypes.shape({
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

export const ingredientDetailsPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
});

export const _BREAD = "bun"
export const _SAUCE = "sauce"
export const _FILLING = "main"

export const _calTitle = "Калорий,ккал"
export const _prTitle = "Белки, г"
export const _faTitle = "Жиры, г"
export const _carTitle = "Углеводы, г"

export const _URL = "https://norma.nomoreparties.space/api/";
export const _ING = "ingredients";
export const _ORDER = "orders";