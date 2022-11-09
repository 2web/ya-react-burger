import styles from './burger-construct-list.module.css';
import BurgerConstructItem from "../burger-construct-item/burger-construct-item";
import {ingredientItem, _BREAD, _SAUCE, _FILLING} from "../../utils/const";
import PropTypes from "prop-types";

const BurgerConstructList = ({ingredients}) => {
    const breadArr = ingredients.filter((item) => item.type === _BREAD);
    const souceArr = ingredients.filter((item) => item.type === _SAUCE);
    const mainArr =  ingredients.filter((item) => item.type === _FILLING);
    const count = 1;
    return (
        <div className={styles.list}>
            <p className="text text_type_main-medium">
                Булки
            </p>
            <div className={styles.section}>
                {breadArr.map((item, index) => (<BurgerConstructItem key={item._id} card={item} count={count} />))}
            </div>
            <p className="text text_type_main-medium">
                Соусы
            </p>
            <div className={styles.section}>
                {souceArr.map((item, index) => (<BurgerConstructItem key={item._id} card={item} count={count} />))}
            </div>
            <p className="text text_type_main-medium">
                Начинки
            </p>
            <div className={styles.section}>
                {mainArr.map((item, index) => (<BurgerConstructItem key={item._id} card={item} count={count} />))}
            </div>
        </div>
    )
}

BurgerConstructList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientItem).isRequired
}

export default BurgerConstructList