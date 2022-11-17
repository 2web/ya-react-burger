import styles from './construct-total.module.css';
import {CurrencyIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { _URL, _ORDER } from "../../utils/const";
import {useContext,useState} from 'react';
import Modal from '../modal/modal';
import useModal from '../../custom-hooks/use-modal';
import OrderDetails from '../order-details/order-details';
import constructorContext from '../../context/construct-context';
import useCart from '../../custom-hooks/use-cart';
import fetchPost from '../../utils/fetch';

const ConstructTotal = () => {
    const [order, setOrder] = useState({});
    const { banState } = useContext(constructorContext);
    const { isOpen, handleOpen, handleClose, handleCloseOverlay } = useModal();
    const { cart, price } = useCart([...banState.ban,...banState.fill,...banState.ban]);
    
    const handleOrderClick = () => {
        fetchPost(_URL+_ORDER, { ingredients: cart })
          .then((data) => {
            setOrder({
              number: data.order.number,
              name: data.name,
            });
            handleOpen();
          })
          .catch((err) => console.log(err));
    };

    return (
        <>
            <div className={`${styles.total_block} mt-10 mb-10 pr-4`}>
                <p className="text text_type_digits-medium pr-2">{price}</p>
                <CurrencyIcon type={"primary"}/>
                <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                    Оформить заказ
                </Button>
            </div>
            <Modal
                header=""
                isOpened={isOpen}
                onClose={handleClose}
                handleCloseOverlay={handleCloseOverlay}
            >
                <OrderDetails order={order} />
            </Modal>
        </>
    )
}

export default ConstructTotal