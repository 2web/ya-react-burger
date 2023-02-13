import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.scss";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";

const IngredientCard = ({ ingredientCard, openModal, total }) => {
  const location = useLocation();
  const [, dragRef] = useDrag({
    type: "card",
    item: ingredientCard,
  });

  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/ingredients/${ingredientCard._id}`, 
        state: { background: location },
      }}
    >
      <div ref={dragRef} className={styles.ingredientCard}>
        {total !== 0 && (
          <div className={`${styles.ingredientCounter} text text_type_digits-default`}>
            <span>{total}</span>
          </div>
        )}
        <img
          src={ingredientCard.image}
          alt=""
          className={`${styles.ingredientImage} mb-2`}
        />
        <div className={`${styles.ingredientPrice} mb-2`}>
          <span className={`text text_type_digits-default mr-2`}>
            {ingredientCard.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <div
          className={`${styles.ingredientName} name text text_type_main-default`}
        >
          {ingredientCard.name}
        </div>
      </div>
    </Link>
  );
};

const ingredientCardPropTypes = PropTypes.shape({
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

IngredientCard.propTypes = {
  ingredientCard: ingredientCardPropTypes,
  openModal: PropTypes.func,
  total: PropTypes.number,
};

export default IngredientCard;
