import { useParams } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "../../../custom-hooks/hooks";

import styles from "./details.module.scss";

import { CAL_TITLE, PR_TITLE, FA_TITLE, CAR_TITLE } from "../../../utils/const";

type TIngredientDetails = {
  closeModal?: Function;
}

const IngredientDetails: FC<TIngredientDetails> = () => {
  const { ingredients } = useAppSelector((store) => store.burgerIngredientsReducer);
  let { id }: { id: string } = useParams();
  if (!ingredients) {
    return <div>Loading...</div>;
  }
  const currentIngredient = ingredients.find(el => el._id === id);

  return (
    currentIngredient ?
      <div className={`${styles.modal}`}>
        <div className={`${styles.title}`}>
          <h2 className={`${styles.title} text text_type_main-large`}>
            Детали ингредиента
          </h2>
        </div>
        <img
          src={currentIngredient.image_large}
          alt={currentIngredient.name}
          title={currentIngredient.name}
        />
        <h3 className={`${styles.iname} text text_type_main-medium mt-4 mb-8`}>
          {currentIngredient.name}
        </h3>
        <div className={`${styles.container}`}>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{CAL_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.calories}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{PR_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.proteins}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{FA_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.fat}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{CAR_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.carbohydrates}
            </span>
          </div>
        </div>
      </div>
      : null
  );
};

export default IngredientDetails;
