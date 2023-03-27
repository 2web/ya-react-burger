import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.scss";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";
import { IIngredientItem } from "../../../utils/types";
import { FC } from "react";

type TIngredientCard = {
  ingredientCard: IIngredientItem;
  openModal: Function;
  total: number;
}

const IngredientCard: FC<TIngredientCard> = ({ ingredientCard, openModal, total }) => {
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

export default IngredientCard;