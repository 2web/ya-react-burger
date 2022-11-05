import styles from './burger-construct-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientItem} from "../../utils/const";
import PropTypes from "prop-types";

const BurgerConstructItem = ({item}) => {
    return (
        <div className={styles.card}>
            <img src={item.image} alt={item.name} title={item.name} />
            <div className={`${styles.price} pt-1 pb-1`}>
                <p className="text text_type_digits-default mr-2">{item.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>{item.name}</p>
            <Counter count={1} size="default"/>
        </div>
    )
}

BurgerConstructItem.propTypes = {
    data: PropTypes.arrayOf(ingredientItem)
}

export default BurgerConstructItem