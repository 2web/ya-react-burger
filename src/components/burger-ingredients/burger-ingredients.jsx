import styles from "./burger-ingredients.module.css";
import "./styles.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ConstructTotal from "../construct-total/construct-total";
import PropTypes from "prop-types";
import {useContext} from "react";
import constructorContext from '../../context/construct-context';
import {ingredientItem} from "../../utils/const";

const BurgerIngredients = () => {
  const { banState } = useContext(constructorContext);

  const bunItem = (db, skey, dir, title) => {
    return (
      <div className={"pl-8"}>
        {
          db.length ?
          (
              <ConstructorElement
                  key={skey}
                  type={dir}
                  isLocked={true}
                  text={`${db[0].name} ${title}`}
                  price={db[0].price}
                  thumbnail={db[0].image}
              />
          ) :
          (
              <div className={`constructor-element constructor-element_pos_${dir}`}>
                  <span className={"constructor-element__row align-center"}>
                      <span className={"constructor-element__note"}>
                          Выберите булку
                      </span>
                  </span>
              </div>
          )
        }
      </div>
    )
  }

  bunItem.propTypes = {
      db: PropTypes.arrayOf(ingredientItem).isRequired,
      skey: PropTypes.number.isRequired,
      dir: PropTypes.string.isRequired,
      title: PropTypes.string
  };

  return (
    <section className={styles.section}>
      <div className={styles.section_inner}>
        {bunItem(banState.ban, 0, "top", "верх")}
        <div className={styles.ingredients_list}>
        {
          banState.fill[0] && typeof banState.fill[0]['name'] !== "undefined"  ? 
          (banState.fill.map((ingredient, index) => {
            return (
                <div key={index} className={styles.item}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </div>
            )
          }))
          :
          (
              <div className={"pl-8"}>
                  <div className={"constructor-element"}>
                      <span className={"constructor-element__row align-center"}>
                          <span className={"constructor-element__note"}>
                              Выберите начинку
                          </span>
                      </span>
                  </div>
              </div>
            )
        }
        </div>
        {bunItem(banState.ban, 1, "bottom", "низ")}
      </div>
      <ConstructTotal/>
    </section>
  );
};

ConstructorElement.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    text: PropTypes.any.isRequired,
    price: PropTypes.number.isRequired
};

export default BurgerIngredients;