import React, { useEffect } from 'react'
import OrderDetail from '../../components/order/detail/detail'
import { useAppDispatch, useAppSelector } from '../../custom-hooks/hooks'
import styles from './index.module.scss'

import { useLocation } from 'react-router-dom'
import {
  CONNECTION_CLOSE,
  CONNECTION_START,
} from '../../store/middleware/socket-actions-types'

const OrderPage = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector((store) => store.userReducer.accessToken)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.indexOf('profile/orders') !== -1) {
      dispatch({
        type: CONNECTION_START,
        payload: `?token=${accessToken && accessToken.replace('Bearer ', '')}`,
      })
    } else {
      dispatch({ type: CONNECTION_START, payload: '/all' })
    }

    return () => {
      dispatch({ type: CONNECTION_CLOSE })
    }
  }, [])

  return (
    <div className={`${styles.container}`}>
      <OrderDetail />
    </div>
  )
}

export default OrderPage