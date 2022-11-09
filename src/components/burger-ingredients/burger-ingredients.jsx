import styles from "./burger-ingredients.module.css";
import "./styles.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ConstructTotal from "../construct-total/construct-total";
import PropTypes from "prop-types";
import { _BREAD } from "../../utils/const";
import {useMemo} from "react";

const BurgerIngredients = ({ data }) => {

  const totalPrice = useMemo(() => (
    data.map((item) => item.price).reduce((a, b) => a + b, 0)), 
    [data]);

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <div className={"pl-8"}>
          <ConstructorElement
            key={0}
            type="top"
            isLocked={true}
            text={data && data.length && data[0].name}
            price={data && data.length && data[0].price}
            thumbnail={data && data.length && data[0].image}
          />
        </div>
        <div className={styles.ingredients_list}>
          {data && data.length && data.map((ingredient, index) => {
            return ingredient.type !== _BREAD && (
              <div key={ingredient._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          })}
        </div>
        <div className={"pl-8"}>
          <ConstructorElement
            key={1}
            type="bottom"
            isLocked={true}
            text={data && data.length && data[0].name}
            price={data && data.length && data[0].price}
            thumbnail={data && data.length && data[0].image}
          />
        </div>
      </div>
      <ConstructTotal totalVal={totalPrice} />
    </section>
  );
};

ConstructorElement.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    text: PropTypes.any.isRequired,
    price: PropTypes.number.isRequired
};

ConstructTotal.propTypes = {
    totalVal: PropTypes.number
};

export default BurgerIngredients;