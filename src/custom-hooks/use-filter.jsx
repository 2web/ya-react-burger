import {useMemo} from "react";
import {_BREAD, _SAUCE, _FILLING} from "../utils/const";
import {ingredientItem} from "../utils/const";
import PropTypes from "prop-types";

const useIngredientsFilter = (cards) => {
  const breadArr = useMemo(
    () => (cards.filter((item) => item.type === _BREAD)),
    [cards]
  );

  const mainArr = useMemo(
    () => cards.filter((item) => item.type === _FILLING),
    [cards]
  );

  const souceArr = useMemo(
    () => cards.filter((item) => item.type === _SAUCE),
    [cards]
  );

  return {
    breadArr,
    mainArr,
    souceArr
  }
}

useIngredientsFilter.propTypes = {
    cards: PropTypes.arrayOf(ingredientItem).isRequired
};

export default useIngredientsFilter;
