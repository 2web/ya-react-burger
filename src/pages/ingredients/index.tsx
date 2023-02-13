import React, { useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../custom-hooks/hooks";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { getIngredients } from "../../utils/init";

const IngredientPage = () => {
  const { ingredients } = useAppSelector(
    (store) => store.burgerIngredientsReducer
  );
  const dispatch: Function = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  let { id }: { id: string } = useParams();
  const currentIngredient = ingredients.find(el => el._id === id);

  return (
    currentIngredient ?
      <div className={`${styles.ingredientPage}`}>
        <div className={`${styles.titleBlock}`}>
          <h2 className={`text text_type_main-large`}>Детали ингредиента</h2>
        </div>
        <img
          src={currentIngredient.image_large}
          alt={currentIngredient.name}
          className={`${styles.ingredientImage} mb-4`}
        />
        <h3
          className={`${styles.ingredientName} mb-8 text text_type_main-medium`}
        >
          {currentIngredient.name}
        </h3>
        <div className={`${styles.energyValueContainer}`}>
          <div className={`${styles.energyValueBlock}`}>
            <span className="text text_type_main-default text_color_inactive mb-2">
              Калории,ккал
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {currentIngredient.calories}
            </span>
          </div>
          <div className={`${styles.energyValueBlock}`}>
            <span className="text text_type_main-default text_color_inactive mb-2">
              Белки, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {currentIngredient.proteins}
            </span>
          </div>
          <div className={`${styles.energyValueBlock}`}>
            <span className="text text_type_main-default text_color_inactive mb-2">
              Жиры, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {currentIngredient.fat}
            </span>
          </div>
          <div className={`${styles.energyValueBlock}`}>
            <span className="text text_type_main-default text_color_inactive mb-2">
              Углеводы, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {currentIngredient.carbohydrates}
            </span>
          </div>
        </div>
      </div>
    : null
  );
};

export default IngredientPage;
