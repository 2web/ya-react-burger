/* eslint-disable array-callback-return */
import { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import Bar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import IngredientCard from "./card/card";
import IngredientBlock from "./block/block";

import styles from "./burger-ingredients.module.scss";

import Modal from "../modal/modal";
import "./styles.css";
import IngredientDetails from "./details/details";

import { DEL_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from '../../store/actions';

const BurgerIngredients = () => {
  const { ingredients } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  const dispatch = useDispatch();

  const constructorIngredients = useSelector(
    (store) => store.constructorReducer.constructorIngredients
  );
  const constructorBun = useSelector(
    (store) => store.constructorReducer.constructorBun
  );

  const returnType = ingredients.map((ingredientCard) => ingredientCard.type);
  const uniqTypes = [...new Set(returnType)];

  const [visibleModal, setVisibleModal] = useState(false);
  const [offsetTopScrollBlock, setOffsetTopScrollBlock] = useState(0);
  const [navChange, setNavChange] = useState({
    clickedBlock: uniqTypes[0],
    scrolledBlock: uniqTypes[0],
    currentEvent: "",
  });

  useEffect(() => {
    if (!visibleModal) {
      dispatch({
        type: DEL_CURRENT_INGREDIENT
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleModal]);

  useEffect(() => {
    countersSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [constructorIngredients, constructorBun]);

  const scrollableNodeRef = useRef();
  const ingredientBlockRef = useRef([]);

  useMemo(() => {
    ingredientBlockRef.current = [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients]);

  const addToBlockRefs = (el) => {
    if (el && !ingredientBlockRef.current.includes(el)) {
      ingredientBlockRef.current.push(el);
    }
  };

  const openModal = (ingredient) => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      ingredient,
    });
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const getCurrentOffsetIngredientBlock = () => {
    const currentScrolableRef = scrollableNodeRef.current;
    setOffsetTopScrollBlock(currentScrolableRef.getBoundingClientRect().top);
  };

  const eventListenerFunction = () => {
    const currentHeightIngredient = scrollableNodeRef.current.children[0].offsetHeight;
    const currentHeightScrollBlock = scrollableNodeRef.current.offsetHeight;
    const curentScrollTop = scrollableNodeRef.current.scrollTop;

    ingredientBlockRef.current.find((e, index) => {
      if (curentScrollTop >= e.offsetTop) {
        return setNavChange({
          ...navChange,
          scrolledBlock: uniqTypes[index],
        });
      }

      if (
        currentHeightIngredient === curentScrollTop + currentHeightScrollBlock
      ) {
        return setNavChange({
          ...navChange,
          scrolledBlock: uniqTypes[uniqTypes.length - 1],
        });
      }
    });
  };

  const onScrollIngredients = () => {
    setNavChange({
      ...navChange,
      currentEvent: "scrolled",
    });
    scrollableNodeRef.current.addEventListener("scroll", eventListenerFunction);
    return () => {
      scrollableNodeRef.current.removeEventListener("scroll", eventListenerFunction);
    }
  };

  const changeActiveTabScrolled = () => {
    if (navChange.scrolledBlock !== navChange.clickedBlock) {
      setNavChange({
        ...navChange,
        scrolledBlock: navChange.scrolledBlock,
      });
    }
  };

  const changeActiveTabClicked = (e) => {
    scrollableNodeRef.current.removeEventListener(
      "scroll",
      eventListenerFunction
    );
    setNavChange({
      ...navChange,
      clickedBlock: e,
      currentEvent: "clicked",
    });
  };

  const scrollToIngredient = () => {
    const currentScrolableRef = scrollableNodeRef.current;
    const currentTypeIndex = uniqTypes.indexOf(navChange.clickedBlock);
    const currentIngredientBlock = ingredientBlockRef.current[currentTypeIndex];
    const offsetTopCurrentIngredientBlock = currentIngredientBlock.offsetTop;

    currentScrolableRef.scrollTo({
      top: offsetTopCurrentIngredientBlock,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getCurrentOffsetIngredientBlock();
    scrollToIngredient();
    onScrollIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navChange.currentEvent]);

  useEffect(() => {
    changeActiveTabScrolled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navChange.scrolledBlock]);

  const countersSelected = () => {
    const ingredientCounters = constructorIngredients.map((ingredient) => {
      const ingredientId = ingredient._id;
      return ingredientId;
    });

    if (constructorBun) {
      const ingredientId = constructorBun._id;
      ingredientCounters.push(ingredientId);
    }

    return ingredientCounters;
  };

  return (
    <>
      <div className={`${styles.burgerIngredients} mt-5`}>
        <div className={`${styles.blockIngredients} mb-10`}>
          {uniqTypes.map((uniqType, index) => (
            <Tab
              value={uniqType}
              active={
                (navChange.clickedBlock === uniqType &&
                  navChange.currentEvent === "clicked") ||
                (navChange.scrolledBlock === uniqType &&
                  navChange.currentEvent === "scrolled")
              }
              onClick={changeActiveTabClicked}
              key={uniqType}
            >
              {uniqType}
            </Tab>
          ))}
        </div>
        <Bar
          style={{
            maxHeight: `calc(100vh - ${offsetTopScrollBlock}px - 1px)`,
          }}
          autoHide={false}
          scrollableNodeProps={{
            ref: scrollableNodeRef,
          }}
        >
          {uniqTypes.map((uniqType, index) => (
            <IngredientBlock
              key={uniqType}
              uniqType={uniqType}
              ref={addToBlockRefs}
            >
              {ingredients.map((ingredientCard) => {
                let total = 0;
                let selected = countersSelected();

                for (let i = 0; i < selected.length; i++) {
                  const element = selected[i];

                  if (ingredientCard._id === element) {
                    total++;

                    if (ingredientCard.type === "??????????") {
                      total++;
                    }
                  }
                }

                if (ingredientCard.type === uniqType) {
                  return (
                    <IngredientCard
                      key={ingredientCard._id}
                      ingredientCard={ingredientCard}
                      openModal={openModal}
                      total={total}
                    />
                  );
                }
              })}
            </IngredientBlock>
          ))}
        </Bar>
      </div>
      {visibleModal && (
        <Modal setVisible={setVisibleModal} hideDefaultClose={true}>
          <IngredientDetails closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
