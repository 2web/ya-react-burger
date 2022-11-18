import styles from './burger-construct-item.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientTypes} from "../../utils/const";
import PropTypes from "prop-types";

import Modal from "../modal/modal";
import useModal from '../../custom-hooks/use-modal';
import IngredientDetails from '../detail/detail';

const BurgerConstructItem = ({count, card}) => {
    const { name, image, price } = card
    const { isOpen, handleOpen, handleClose, handleCloseOverlay } = useModal();

    return (
        <>
            <div className={styles.card}  onClick={handleOpen}>
                <img src={image} alt={name} title={name} />
                <div className={`${styles.price} pt-1 pb-1`}>
                    <p className="text text_type_digits-default mr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.name} text text_type_main-default`}>{name}</p>
                { count && <Counter count={count} size="default" /> }
            </div>
            <Modal
                header="Детали ингредиента"
                isOpened={isOpen}
                onClose={handleClose}
                handleCloseOverlay={handleCloseOverlay}
            >
                <IngredientDetails card={card} />
            </Modal>
        </>
    )
}

BurgerConstructItem.propTypes = {
    count: PropTypes.number,
    card: ingredientTypes.isRequired
};

export default BurgerConstructItem