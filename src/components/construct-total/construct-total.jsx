import styles from './construct-total.module.css';
import {CurrencyIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { URL, ORDER } from "../../utils/const";
import {useContext,useState,useMemo} from 'react';
import Modal from '../modal/modal';
import useModal from '../../custom-hooks/use-modal';
import OrderDetails from '../order-details/order-details';
import constructorContext from '../../context/construct-context';
import fetchPost from '../../utils/fetch';

const ConstructTotal = () => {
    const [order, setOrder] = useState(null);
    const { banState } = useContext(constructorContext);
    const { isOpen, handleOpen, handleClose, handleCloseOverlay } = useModal();

    const { cart, price } = useMemo(() => {
        const { ban, fill } = banState;
        if (!ban || !fill.length || (fill.length && fill[0] === undefined) ) {
          return { cart: [], price: 0 };
        }      
        const burgerData = [...ban, ...fill, ...ban];
        return {
            cart: burgerData.map((item) => item._id),
            price: burgerData.reduce((sum, item) => item.price + sum, 0),
        };
    }, [banState]);
    
    const handleOrderClick = () => {
        fetchPost(URL+ORDER, { ingredients: cart })
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