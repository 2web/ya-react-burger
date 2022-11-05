import styles from './construct-total.module.css';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructTotal = (props) => {
    return (
        <div className={`${styles.total_block} mt-10 mb-10 pr-4`}>
            <p className="text text_type_digits-medium pr-2">{props.value}</p>
            <CurrencyIcon type={"primary"}/>
            <Button htmlType={'submit'} type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}

export default ConstructTotal