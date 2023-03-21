import React, { useEffect, useState } from 'react'
import styles from './detail.module.scss'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Bar from 'simplebar-react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../custom-hooks/hooks'
import {
  getDate,
  getFeedStatus,
  getTotalPrice,
  sortIngredients,
} from '../../../utils/feed'
import { IDrgagItem, TOrders } from '../../../utils/types'

export type TuseParams = {
  id: string
}

const OrderDetail: any = () => {
  let { id } = useParams<TuseParams>()
  const currentFeed = useAppSelector((store) =>
    store.wReducer.messages?.orders.find(
      (el: TOrders) => el.number === parseInt(id),
    ),
  )
  const ingredients = useAppSelector(
    (store) => store.burgerIngredientsReducer.ingredients,
  )
  const [sortedIngredients, setSortedIngredients] = useState<IDrgagItem[]>([])
  const [totalPrice, setTotalPrice] = useState<number>()
  const [timeString, setTimeString] = useState<string>()
  const [feedStatus, setFeedStatus] = useState<string>()

  useEffect(() => {
    if (ingredients && currentFeed) {
      sortIngredients(currentFeed, ingredients, setSortedIngredients)
      getDate(currentFeed, setTimeString)
      getFeedStatus(currentFeed, setFeedStatus)
    }
  }, [currentFeed])

  useEffect(() => {
    if (sortedIngredients.length) {
      getTotalPrice(sortedIngredients, setTotalPrice)
    }
  }, [sortedIngredients])

  if (currentFeed) {
    return (
      <div className={`${styles.orderContainer}`}>
        <p className={`${styles.orderNumber} text text_type_digits-default mb-10`}>
          #{id}
        </p>
        <h2 className={`mb-3 text text_type_main-medium`}>
          {currentFeed.name}
        </h2>
        <p className={`mb-15 text text_type_main-small ${feedStatus === 'Выполнен' && styles.orderStatusSuccess}`}>
          {feedStatus}
        </p>
        <h2 className={`mb-6 text text_type_main-medium`}>Состав:</h2>
        <Bar
          style={{
            width: '100%',
            maxHeight: `320px`,
          }}
          autoHide={false}
        >
          <div className="pr-4">
            {sortedIngredients && sortedIngredients.map((el, index) => {
                return (
                  <div key={index} className={`${styles.orderIngredient}`}>
                    <div className={`${styles.orderIngredientImage}`}>
                      <img src={el.image} alt="" />
                    </div>
                    <p className={`${styles.orderIngredientTitle} text text_type_main-default`}>
                      {el.name}
                    </p>
                    <p className={`${styles.orderIngredientPrice} text text_type_digits-default`}>
                      <span>
                        {el.count} x {el.price}
                      </span>
                      <CurrencyIcon type="primary" />
                    </p>
                  </div>
                )
            })}
          </div>
        </Bar>
        <div className={`${styles.orderBottom} mt-4`}>
          <p className={`${styles.orderDate} text text_type_main-default text_color_inactive`}>
            {timeString}
          </p>
          <p className={`${styles.orderPrice} text text_type_digits-default`}>
            <span className="mr-2">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    )
  } else {
    return ''
  }
}

export default OrderDetail