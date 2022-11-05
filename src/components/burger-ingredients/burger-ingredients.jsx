import styles from "./burger-ingredients.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ConstructTotal from "../construct-total/construct-total";
import PropTypes from "prop-types";
import { _BREAD } from "../../utils/const";
import {useMemo} from "react";

const BurgerIngredients = (props) => {

  const totalPrice = useMemo(() => (
    props.data.map((item) => item.price).reduce((a, b) => a + b, 0)), 
    [props.data])

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        <div className={"pl-8"}>
          <ConstructorElement
            key={0}
            type="top"
            isLocked={true}
            text={props.data[0].name}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </div>
        <div className={styles.ingredients_list}>
          {props.data.map((ingredient, index) => {
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
            text={props.data[props.data.length - 1].name}
            price={props.data[props.data.length - 1].price}
            thumbnail={props.data[props.data.length - 1].image}
          />
        </div>
      </div>
      <ConstructTotal value={totalPrice} />
    </section>
  );
};

ConstructTotal.propTypes = {
  value: PropTypes.number.isRequired
};

export default BurgerIngredients;