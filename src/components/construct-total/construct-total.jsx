import styles from './construct-total.module.css';
import {CurrencyIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import useModal from '../../custom-hooks/use-modal';
import OrderDetails from '../order-details/order-details';

const ConstructTotal = (totalVal) => {
    const { isOpen, handleOpen, handleClose, handleCloseOverlay } = useModal();

    return (
        <>
            <div className={`${styles.total_block} mt-10 mb-10 pr-4`}>
                <p className="text text_type_digits-medium pr-2">{totalVal && totalVal["totalVal"]}</p>
                <CurrencyIcon type={"primary"}/>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpen}>
                    Оформить заказ
                </Button>
            </div>
            <Modal
                header=""
                isOpened={isOpen}
                onClose={handleClose}
                handleCloseOverlay={handleCloseOverlay}
            >
                <OrderDetails />
            </Modal>
        </>
    )
}

ConstructTotal.propTypes = {
    totalVal: PropTypes.number,
};

export default ConstructTotal