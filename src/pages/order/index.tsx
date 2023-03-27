import React, { useEffect } from 'react';
import OrderDetail from '../../components/order/detail/detail';
import { useAppDispatch, useAppSelector } from '../../custom-hooks/hooks';
import styles from './index.module.scss';

import { useLocation } from 'react-router-dom';
import {
  CONNECTION_CLOSE,
  CONNECTION_START,
} from '../../store/middleware/socket-actions-types';
import { getToken } from '../../utils/functions';
import { ROUTE_PROFILE_ORDERS } from '../../utils/const';

const OrderPage = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(getToken)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.indexOf(ROUTE_PROFILE_ORDERS) !== -1) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`${styles.container}`}>
      <OrderDetail />
    </div>
  )
}

export default OrderPage