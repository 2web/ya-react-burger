import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../custom-hooks/hooks';
import styles from './index.module.scss';

import OrderBlock from '../../components/order/block/block';
import Bar from 'simplebar-react';
import {
  CONNECTION_CLOSE,
  CONNECTION_START,
} from '../../store/middleware/socket-actions-types';
import { IDrgagItem, TOrders } from '../../utils/types';
import { getwsReducerMessages } from '../../utils/functions';


const FeedPage = () => {
  const dispatch = useAppDispatch()
  const message = useAppSelector(getwsReducerMessages)
  const [offsetTopScrollBlock, setOffsetTopScrollBlock] = useState<number>(0)
  const scrollableNodeRef = useRef<HTMLDivElement | any>(null)
  const [feed, setFeed] = useState<any>({
    done: [],
    created: [],
    pending: [],
  })

  const getCurrentOffsetIngredientBlock = () => {
    const currentScrolableRef = scrollableNodeRef.current
    currentScrolableRef &&
      setOffsetTopScrollBlock(currentScrolableRef.getBoundingClientRect().top)
  }

  useEffect(() => {
    getCurrentOffsetIngredientBlock()
    dispatch({ type: CONNECTION_START, payload: '/all' })

    return () => {
      dispatch({ type: CONNECTION_CLOSE })
    }
  }, [dispatch])

  useEffect(() => {
    if (message && message.orders) {
      setFeed({
        ...feed,
        done: message.orders.filter((el: TOrders) => {
          if (el.status === 'done') {
            return true
          }
          return false
        }),
        created: message.orders.filter((el: TOrders) => {
          if (el.status === 'created') {
            return true
          }
          return false
        }),
        pending: message.orders.filter((el: TOrders) => {
          if (el.status === 'pending') {
            return true
          }
          return false
        }),
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  return (
    <>
      {!message && (
        <div className={`${styles.container}`}>
          <h1 className={`text text_type_main-medium ${styles.error}`}>
            Идет загрузка ленты заказов, пожалуйста, подождите...
          </h1>
        </div>
      )}
      {message && message.hasOwnProperty('orders') && (
      <div className={`${styles.container}`}>
        <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
        <div className={`${styles.block}`}>
          <Bar
            style={{
              width: '100%',
              maxHeight: `calc(100vh - ${offsetTopScrollBlock}px - 1px)`,
            }}
            autoHide={false}
            scrollableNodeProps={{ ref: scrollableNodeRef }}
          >
            <div className={`${styles.orderContainer}`}>
              {message &&
                message.orders.map((el: IDrgagItem) => (
                  <OrderBlock key={el._id} order={el} feed={true} />
                ))}
            </div>
          </Bar>
          <div className={`${styles.feedInfo}`}>
            <div className={`${styles.feedStatus}`}>
              {feed.done.length ? (
                <div className={`${styles.feedStatusSuccess} mb-15`}>
                  <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                  <div
                    style={{
                      columnCount: Math.floor(feed.done.length / 10),
                    }}
                  >
                    {feed.done &&
                      feed.done.map((el: any, index: number) => (
                        <p key={index} className="text text_type_digits-default">
                          {el.number}
                        </p>
                      ))}
                  </div>
                </div>
              ) : (
                ''
              )}
              {feed.created.length ? (
                <div className={`${styles.feedStatusInWork}`}>
                  <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                  <div
                    style={{
                      columnCount: Math.floor(feed.done.length / 10),
                    }}
                  >
                    {feed.created &&
                      feed.created.map((el: any, index: number) => (
                        <p key={index} className="text text_type_digits-default">
                          {el.number}
                        </p>
                      ))}
                  </div>
                </div>
              ) : (
                ''
              )}
              {feed.pending.length ? (
                <div className={`${styles.feedStatusSuccess} mb-15`}>
                  <h3 className="text text_type_main-medium mb-6">Ожидает:</h3>
                  <div
                    style={{
                      columnCount: Math.floor(feed.done.length / 10),
                    }}
                  >
                    {feed.pending &&
                      feed.pending.map((el: any, index: number) => (
                        <p key={index} className="text text_type_digits-default">
                          {el.number}
                        </p>
                      ))}
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className={`${styles.feedAllTime} mb-15`}>
              <h3 className="text text_type_main-medium">
                Выполнено за все время:
              </h3>
              <h2 className={`${styles.feedTitle} text text_type_digits-large`}>
                {message && message.total}
              </h2>
            </div>
            <div className={`${styles.feedAllToday}`}>
              <h3 className="text text_type_main-medium">
                Выполнено за сегодня:
              </h3>
              <h2 className={`${styles.feedTitle} text text_type_digits-large`}>
                {message && message.totalToday}
              </h2>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default FeedPage
