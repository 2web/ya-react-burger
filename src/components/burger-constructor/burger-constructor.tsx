import { useState, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.scss";
import Bar from "simplebar-react";

import Modal from "../modal/modal";

import OrderDetails from "../order/details/details";
import ConstrDrag from "../constructor-drag/constructor-drag";

import { v4 as uuidv4 } from "uuid";

import { useAppSelector, useAppDispatch } from "../../custom-hooks/hooks";
import { IDrgagItem, IIngredientItem } from "../../utils/types";
import { 
  getOrder,
  getToken,
  getLoad,
  getConstrIngredients,
  getConstrBun,
  getTotalConstrPrice } from "../../utils/functions";

import {
  SET_CONSTRUCTOR_BUN,
  SET_CONSTRUCTOR_INGREDIENTS,
  DEL_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR_PRICE,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
} from "../../store/actions/burgerIngredientsActions";
import { postOrder } from "../../store/reducers/send-order";


const BurgerConstructor = () => {
  const order = useAppSelector(getOrder);
  const token = useAppSelector(getToken);
  const isLoadOrder = useAppSelector(getLoad);
  const constructorIngredients = useAppSelector(getConstrIngredients);
  const constructorBun = useAppSelector(getConstrBun);
  const totalConstructorPrice = useAppSelector(getTotalConstrPrice);

  const history = useHistory();
  
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [heightTopScrollBlock, setHeightTopScrollBlock] = useState<number>(0);

  const dispatch: Function = useAppDispatch();
  const scrollableNodeRef = useRef<HTMLDivElement>(null);
  const constructorBottomBlock = useRef<HTMLDivElement>(null);

  const [, dropTarget] = useDrop({
    accept: "card",
    drop(ingredient: IIngredientItem) {
      if (ingredient["type"] === "Булка") {
        const constructorBun = ingredient;
        dispatch({ type: SET_CONSTRUCTOR_BUN, constructorBun });
      } else {
        dispatch({
          type: SET_CONSTRUCTOR_INGREDIENTS,
          ingredient: {
            ...ingredient,
            dragId: uuidv4(),
          },
        });
      }
    },
  });

  useEffect(() => {
    if (order.isLoad) {
      setVisibleModal(true);
    }else{
      // setVisibleModal(false)
    }
  }, [order]);

  useEffect(() => {
    setPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [constructorBun, constructorIngredients]);

  useEffect(() => {
    if (constructorIngredients.length) {
      getCurrentOffsetIngredientBlock();
    }
  }, [constructorIngredients]);

  useEffect(() => {
    window.addEventListener("resize", resizeIngredientBlock, true);
    return () =>
      window.removeEventListener("resize", resizeIngredientBlock, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendOrder = () => {
    if (token) {
      let orderId = constructorIngredients.map((ingr: IDrgagItem) => ingr._id);
      orderId = [constructorBun!._id, ...orderId, constructorBun!._id];
      dispatch(postOrder(orderId,token));
    } else {
      history.push("/login");
    }
  };

  const handleClose = (curentIndex: number) => {
    dispatch({ type: DEL_CONSTRUCTOR_INGREDIENTS, curentIndex });
  };

  const getCurrentOffsetIngredientBlock = () => {
    const windowInnerHeight = window.innerHeight;
    const offsetTopScrollBlock = scrollableNodeRef.current
      ? scrollableNodeRef.current.getBoundingClientRect().top
      : 0;
    const heigthConstructorBottomBlock: number =
      constructorBottomBlock?.current?.offsetHeight || 0;
    const maxBlockHeigth = Math.floor(
      windowInnerHeight -
        offsetTopScrollBlock -
        heigthConstructorBottomBlock -
        20
    );
    if (maxBlockHeigth < 104) {
      setHeightTopScrollBlock(104);
      return;
    }

    setHeightTopScrollBlock(maxBlockHeigth);
  };

  const resizeIngredientBlock = useCallback(() => {
    getCurrentOffsetIngredientBlock();
  }, []);

  const setPrice = () => {
    let thisTotalSumm = 0;

    for (const key in constructorIngredients) {
      const element = constructorIngredients[key];
      thisTotalSumm += element.price;
    }

    if (constructorBun) {
      thisTotalSumm += constructorBun.price * 2;
    }

    dispatch({ type: SET_CONSTRUCTOR_PRICE, thisTotalSumm });
  };

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = constructorIngredients[dragIndex];
      const newCards = [...constructorIngredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      dispatch({
        type: UPDATE_CONSTRUCTOR_INGREDIENTS,
        ingredients: newCards,
      });
    },
    [constructorIngredients, dispatch]
  );

  return (
    <div className={`${styles.constructor} ml-10`}>
      <div className="constructorList" ref={dropTarget}>
        <div className={`${styles.constructorBudTop}`}>
          <div className={`mb-4`}>
            {constructorBun ? (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${constructorBun["name"]} (верх)`}
                price={constructorBun["price"]}
                thumbnail={constructorBun["image"]}
              />
            ) : (
              <div
                className={`constructor-element ${styles.constructorElement} constructor-element_pos_top`}
              >
                <span
                  className={`constructor-element__text ${styles.constructorElementTextPreview}`}
                >
                  Перенесите сюда булку
                </span>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${!constructorIngredients.length && styles.constructorMain}`}
        >
          {constructorIngredients.length ? (
            <Bar
              style={{maxHeight: `${heightTopScrollBlock}px`,}}
              autoHide={false}
              scrollableNodeProps={{ ref: scrollableNodeRef }}
            >
              {constructorIngredients.map(
                (card: IDrgagItem, index: number) =>
                  card.type !== "Булка" && (
                    <ConstrDrag
                      key={card.dragId}
                      item={card}
                      index={index}
                      handleClose={handleClose}
                      moveCard={moveCard}
                    />
                  )
              )}
            </Bar>
          ) : (
            <div className={`constructor-element ${styles.constructorElement}`}>
              <span
                className={`constructor-element__text ${styles.constructorElementTextPreview}`}
              >
                Сюда ингредиенты
              </span>
            </div>
          )}
        </div>

        <div ref={constructorBottomBlock} className="mt-4">
          <div className={`${styles.constructorBudBottom}`}>
            <div>
              {constructorBun ? (
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${constructorBun["name"]} (низ)`}
                  price={constructorBun["price"]}
                  thumbnail={constructorBun["image"]}
                />
              ) : (
                <div
                  className={`constructor-element ${styles.constructorElement} constructor-element_pos_bottom`}
                >
                  <span className={`constructor-element__text ${styles.constructorElementTextPreview}`}>
                    {"Перенесите сюда булку"}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={`${styles.constructorSumm} mt-10`}>
            <div className={`${styles.constructorSummText} mr-10`}>
              <span className="text text_type_main-large mr-2">
                {totalConstructorPrice}
              </span>
              <CurrencyIcon type="primary" />
            </div>
            <Button
              disabled={!constructorBun || isLoadOrder}
              type="primary"
              size="large"
              onClick={sendOrder}
              htmlType="button"
            >
              {isLoadOrder ? 'Обрабатываем заказ' : 'Оформить заказ'}
            </Button>
          </div>
        </div>
        {visibleModal && (
          <Modal setVisible={setVisibleModal}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
