import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './index.module.scss'

import {
  fetchLogout,
  fetchGetUser,
  fetchToken,
} from '../../store/asyncActions/user-auth'

import OrderBlock from '../../components/order/block/block'
import { useAppDispatch, useAppSelector } from '../../custom-hooks/hooks'

import Bar from 'simplebar-react'
import {
  CONNECTION_CLOSE,
  CONNECTION_START,
} from '../../store/middleware/socket-actions-types'
import { IDrgagItem, TApplicationActions } from '../../utils/types'
import { ROUTE_PROFILE_ORDERS,ROUTE_PROFILE } from '../../utils/const'
import { getToken,getwsReducerMessages,getUser } from '../../utils/functions'

const OrdersPage = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(getToken)
  const message = useAppSelector(getwsReducerMessages)
  const profileForm = useAppSelector(getUser)
  const [offsetTopScrollBlock, setOffsetTopScrollBlock] = useState<number>(0)
  const scrollableNodeRef = useRef<HTMLDivElement | any>(null)

  const getCurrentOffsetIngredientBlock = () => {
    const currentScrolableRef = scrollableNodeRef.current
    currentScrolableRef && setOffsetTopScrollBlock(currentScrolableRef.getBoundingClientRect().top)
  }

  useEffect(() => {
    getCurrentOffsetIngredientBlock()
  }, [])

  useEffect(() => {
    getFetchToken(fetchGetUser(profileForm.accessToken))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileForm.accessToken])

  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(fetchLogout())
  }

  const getFetchToken = (callback: TApplicationActions) => {
    if (profileForm.accessToken) {
      dispatch(callback)
    } else {
      dispatch(fetchToken())
    }
  }

  useEffect(() => {
    getCurrentOffsetIngredientBlock()
    dispatch({
      type: CONNECTION_START,
      payload: `?token=${accessToken && accessToken.replace('Bearer ', '')}`,
    })

    return () => {
      dispatch({ type: CONNECTION_CLOSE })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.profileNav} mr-15`}>
        <NavLink
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          to={ROUTE_PROFILE}
          activeClassName={styles.activeNavLink}
          exact={true}
        >
          Профиль
        </NavLink>
        <NavLink
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          to={ROUTE_PROFILE_ORDERS}
          activeClassName={styles.activeNavLink}
          exact={true}
        >
          История заказов
        </NavLink>
        <Link
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          onClick={logout}
          to="#"
        >
          Выход
        </Link>
        <p className={`text text_type_main-default mt-20 ${styles.text}`}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <Bar
        style={{
          width: '100%',
          maxHeight: `calc(100vh - ${offsetTopScrollBlock}px - 1px)`,
        }}
        autoHide={false}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        <div className={`${styles.orderContainer}`}>
          {message && message.orders && message.orders.length > 0 &&
            message.orders.map((el: IDrgagItem) => (
              <OrderBlock key={el._id} order={el} />
            ))}
          {!message && (
            <h1 className={`text text_type_main-medium ${styles.error}`}>
              Идет загрузка истории заказов, пожалуйста, подождите...
            </h1>
          )}
        </div>
      </Bar>
    </div>
  )
}

export default OrdersPage