import {useMemo} from "react";
import {BREAD, SAUCE, FILLING} from "../utils/const";
import {ingredientTypes} from "../utils/const";
import PropTypes from "prop-types";

const useIngredientsFilter = (cards) => {
  const breadArr = useMemo(
    () => (cards.filter((item) => item.type === BREAD)),
    [cards]
  );

  const mainArr = useMemo(
    () => cards.filter((item) => item.type === FILLING),
    [cards]
  );

  const souceArr = useMemo(
    () => cards.filter((item) => item.type === SAUCE),
    [cards]
  );

  return {
    breadArr,
    mainArr,
    souceArr
  }
}

useIngredientsFilter.propTypes = {
    cards: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired
};

export default useIngredientsFilter;
