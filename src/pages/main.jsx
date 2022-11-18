import React from 'react';
import BurgerConstructor from "../components/burger-construct/burger-construct";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";

import styles from './main.module.css'

function MainConstr() {
  return (
    <div className={styles.app_container}>
        <BurgerConstructor />
        <BurgerIngredients />
    </div>
  );
}

export default MainConstr;
