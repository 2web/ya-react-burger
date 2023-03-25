import React, { FC, useState, useEffect } from 'react'
import styles from './block.module.scss'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useLocation, Link } from 'react-router-dom'

import { useAppSelector } from '../../../custom-hooks/hooks'
import {
  getDate,
  getFeedStatus,
  getTotalPrice,
  sortIngredients,
} from '../../../utils/feed'
import { IDrgagItem } from '../../../utils/types'
import { ROUTE_FEED,ROUTE_PROFILE_ORDERS } from "../../../utils/const";
import { getBurgerIngredientsReducerIng } from "../../../utils/functions";

type TOrderBlock = {
  feed?: boolean;
  order?: any;
}

const OrderBlock: FC<TOrderBlock> = ({ feed, order }) => {
  const ingredients = useAppSelector(getBurgerIngredientsReducerIng)
  const location = useLocation()
  const [sortedIngredients, setSortedIngredients] = useState<IDrgagItem[]>([])
  const [totalPrice, setTotalPrice] = useState<number>()
  const [timeString, setTimeString] = useState<string>()
  const [feedStatus, setFeedStatus] = useState<string>()

  useEffect(() => {
    sortIngredients(order, ingredients, setSortedIngredients)
    getDate(order, setTimeString)
    getFeedStatus(order, setFeedStatus)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order])

  useEffect(() => {
    if (sortedIngredients.length) {
      getTotalPrice(sortedIngredients, setTotalPrice)
    }
  }, [sortedIngredients])

  return (
    <Link
      className={styles.link}
      to={{
        pathname: feed
          ? `${ROUTE_FEED}/${order.number}`
          : `${ROUTE_PROFILE_ORDERS}/${order.number}`,
        state: { background: location },
      }}
    >
      <div className={`${styles.orderBlock} p-6 mb-6`}>
        <div className={`${styles.orderTop} mb-6`}>
          <p className={`${styles.orderNember} text text_type_digits-default`}>
            #{order.number}
          </p>
          <p className={`${styles.orderDate} text text_type_main-default text_color_inactive`}>
            {timeString}
          </p>
        </div>
        <h2
          className={`${styles.orderTitle} ${
            feed ? 'mb-6' : 'mb-2'
          } text text_type_main-medium`}
        >
          {order.name}
        </h2>
        {!feed && (
          <p
            className={`${styles.orderStatus} ${
              feedStatus === 'Выполнен' && styles.orderStatusSuccess
            } mb-6 text text_type_main-small`}
          >
            {feedStatus}
          </p>
        )}

        <div className={`${styles.orderBottom}`}>
          <div className={`${styles.orderIngredients}`}>
            {sortedIngredients.map((el, index) => {
              return (
                <div key={index} className={`${styles.orderIngredient}`}>
                  <img src={`${el.image}`} alt="" />
                  {el.count && el.count > 1 && (
                    <span className="text text_type_main-small">
                      +{el.count}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
          <p className={`${styles.orderPrice} text text_type_digits-default`}>
            <span className="mr-2">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    </Link>
  )
}

export default OrderBlock