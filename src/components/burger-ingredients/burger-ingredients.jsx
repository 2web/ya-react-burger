import styles from "./burger-ingredients.module.css";
import "./styles.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ConstructTotal from "../construct-total/construct-total";
import PropTypes from "prop-types";
import {ingredientItem} from "../../utils/const";
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
          {
            data.length ?
             (
                <ConstructorElement
                    key={0}
                    type="top"
                    isLocked={true}
                    text={data[0].name}
                    price={data[0].price}
                    thumbnail={data[0].image}
                />
             ) :
             (
                <div className="constructor-element constructor-element_pos_top">
                    <span className={"constructor-element__row align-center"}>
                        <span className={"constructor-element__note"}>
                            Выберите булку
                        </span>
                    </span>
                </div>
             )
          }
        </div>
        <div className={styles.ingredients_list}>
        {
          data.length ? 
          (data.map((ingredient, index) => {
            return ingredient.type !== _BREAD && (
              <div key={ingredient._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            )
          }
            )):
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
        <div className={"pl-8"}>
            {
                data.length ?
                (
                    <ConstructorElement
                        key={1}
                        type="bottom"
                        isLocked={true}
                        text={data[0].name}
                        price={data[0].price}
                        thumbnail={data[0].image}
                    />
                ) :
                (
                    <div className="constructor-element constructor-element_pos_bottom">
                        <span className={"constructor-element__row align-center"}>
                            <span className={"constructor-element__note"}>
                                Выберите булку
                            </span>
                        </span>
                    </div>
                )
            }
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

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientItem).isRequired
};

export default BurgerIngredients;