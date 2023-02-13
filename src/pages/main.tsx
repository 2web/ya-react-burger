import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppSelector, useAppDispatch } from "../custom-hooks/hooks";

import styles from "./main.module.scss";
import { getIngredients } from "../utils/init";

import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

function MainConstr() {
  const { isLoading, ingredients, isError } = useAppSelector(
    (store) => store.burgerIngredientsReducer
  );
  const dispatch: Function = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading && !isError && !ingredients.length && (
        <h1 className={`text text_type_main-medium ${styles.error}`}>
          Идет загрузка ингредиентов, пожалуйста, подожите...
        </h1>
      )}
      {!isLoading && !isError && ingredients.length && (
        <>
          <div className={styles.app_container}>
            <p className="text text_type_main-large mt-10 mb-5">
              Соберите бургер
            </p>
          </div>
          <div className={styles.app_container}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </div>
        </>
      )}
      {!isLoading && isError && !ingredients.length && (
        <h1 className={`text text_type_main-medium ${styles.error}`}>
          Не удалось загрузить данные
        </h1>
      )}
    </>
  );
}

export default MainConstr;
