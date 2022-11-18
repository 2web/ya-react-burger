import BurgerConstructItem from "../burger-construct-item/burger-construct-item";
import styles from './burger-construct-list.module.css';
import {ingredientTypes} from "../../utils/const";
import PropTypes from "prop-types";

const BurgerItem = ({ title, cards }) => {
    const count = 1;
    return (
        <>
            <p className="text text_type_main-medium">
                {title}
            </p>
            <div className={styles.section}>
                {cards.map((item, index) => (<BurgerConstructItem key={item._id} card={item} count={count} />))}
            </div>
        </>
    )
}

BurgerItem.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired
}

export default BurgerItem;