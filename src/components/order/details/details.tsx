import React from "react";
import { useAppSelector } from "../../../custom-hooks/hooks";
import { getOrderNumber } from "../../../utils/functions";

import done from "../../../images/done.svg";
import styles from "./details.module.scss";

const OrderDetails = () => {
  const number: any = useAppSelector(getOrderNumber);
  return (
    <div className={styles.container}>
      <p className={`${styles.id} text text_type_digits-large`}>
        {number && number !== null ? <span data-testid="orderModal">`${number}`</span> : '\u00a0'}
      </p>
      <h1 className="text text_type_main-medium mb-15">
        {number && number !== null ? 'идентификатор заказа' : 'Ожидайте...'}
      </h1>
      <img className={styles.image} src={done} alt={"Готово"} />
      <p className="text text_type_main-default mb-2">
        Ваш Заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
