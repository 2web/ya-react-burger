import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { postOrder } from "../../utils/send-order";

import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS, DEL_CONSTRUCTOR_INGREDIENTS, SET_CONSTRUCTOR_PRICE, UPDATE_CONSTRUCTOR_INGREDIENTS } from "../../store/actions";

const BurgerConstructor = () => {
  // eslint-disable-next-line no-unused-vars
  const { ingredients } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  const constructorIngredients = useSelector(
    (store) => store.constructorReducer.constructorIngredients
  );
  const constructorBun = useSelector(
    (store) => store.constructorReducer.constructorBun
  );
  const totalConstructorPrice = useSelector(
    (store) => store.constructorReducer.totalConstructorPrice
  );
  const order = useSelector((store) => store.modalOrderReducer);

  const [visibleModal, setVisibleModal] = useState(false);
  const [heightTopScrollBlock, setHeightTopScrollBlock] = useState(0);

  const dispatch = useDispatch();
  const scrollableNodeRef = useRef();
  const constructorBottomBlock = useRef();

  const [, dropTarget] = useDrop({
    accept: "card",
    drop(ingredient) {
      if (ingredient["type"] === "Булка") {
        dispatch({ type: SET_CONSTRUCTOR_BUN, ingredient });
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
    if (order.number) {
      setVisibleModal(true);
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
    return () => window.removeEventListener("resize", resizeIngredientBlock, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendOrder = () => {
    let orderId = constructorIngredients.map((ingr) => ingr._id);
    orderId = [constructorBun._id, ...orderId, constructorBun._id];
    dispatch(postOrder(orderId));
  };

  const handleClose = (curentIndex) => {
    dispatch({ type: DEL_CONSTRUCTOR_INGREDIENTS, curentIndex });
  };

  const getCurrentOffsetIngredientBlock = () => {
    const windowInnerHeight = window.innerHeight;
    const offsetTopScrollBlock = scrollableNodeRef.current
      ? scrollableNodeRef.current.getBoundingClientRect().top
      : 0;
    const heigthConstructorBottomBlock =
      constructorBottomBlock.current.offsetHeight;
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
    (dragIndex, hoverIndex) => {
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
          className={`${
            !constructorIngredients.length && styles.constructorMain
          }`}
        >
          {constructorIngredients.length ? (
            <Bar
              style={{
                maxHeight: `${heightTopScrollBlock}px`,
              }}
              autoHide={false}
              scrollableNodeProps={{ ref: scrollableNodeRef }}
            >
              {constructorIngredients.map(
                (card, index) =>
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
                  <span
                    className={`constructor-element__text ${styles.constructorElementTextPreview}`}
                  >
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
              disabled={!constructorBun}
              type="primary"
              size="large"
              onClick={sendOrder}
              htmlType="button"
            >
              Оформить заказ
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
