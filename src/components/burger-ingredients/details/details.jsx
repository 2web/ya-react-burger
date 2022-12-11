import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./details.module.scss";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CAL_TITLE, PR_TITLE, FA_TITLE, CAR_TITLE } from "../../../utils/const";

const IngredientDetails = ({ closeModal }) => {
  const { currentIngredient } = useSelector(
    (store) => store.modalIngredientReducer
  );

  return (
    currentIngredient && (
      <div className={`${styles.modal}`}>
        <div className={`${styles.title}`}>
          <h2 className={`${styles.title} text text_type_main-large`}>
            Детали ингредиента
          </h2>
          <div className={`${styles.close}`} onClick={() => closeModal(false)}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <img
          src={currentIngredient.image_large}
          alt={currentIngredient.name}
          title={currentIngredient.name}
        />
        <h3 className={`${styles.iname} text text_type_main-medium mt-4 mb-8`}>
          {currentIngredient.name}
        </h3>
        <div className={`${styles.container}`}>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{CAL_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.calories}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{PR_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.proteins}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{FA_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.fat}
            </span>
          </div>
          <div className={`${styles.block}`}>
            <span className="text text_type_main-default">{CAR_TITLE}</span>
            <span className="text text_type_digits-default">
              {currentIngredient.carbohydrates}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

IngredientDetails.propTypes = {
  closeModal: PropTypes.func,
};

export default IngredientDetails;
