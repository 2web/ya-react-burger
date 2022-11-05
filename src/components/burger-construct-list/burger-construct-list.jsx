import styles from './burger-construct-list.module.css';
import BurgerConstructItem from "../burger-construct-item/burger-construct-item";
import {ingredientItem, _BREAD, _SAUCE, _FILLING} from "../../utils/const";
import PropTypes from "prop-types";

const BurgerConstructList = ({ingredients}) => {
    return (
        <div className={styles.list}>
            <p className="text text_type_main-medium">
                Булки
            </p>
            <div className={styles.section}>
                {ingredients.map((item, index) => (item.type === _BREAD && <BurgerConstructItem key={index} item={item} />))}
            </div>
            <p className="text text_type_main-medium">
                Соусы
            </p>
            <div className={styles.section}>
                {ingredients.map((item, index) => (item.type === _SAUCE && <BurgerConstructItem key={index} item={item} />))}
            </div>
            <p className="text text_type_main-medium">
                Начинки
            </p>
            <div className={styles.section}>
                {ingredients.map((item, index) => (item.type === _FILLING && <BurgerConstructItem key={index} item={item} />))}
            </div>
        </div>
    )
}

BurgerConstructList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientItem)
}

export default BurgerConstructList