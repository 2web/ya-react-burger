import React from "react";
import styles from "./block.module.scss";
import PropTypes from "prop-types";

const IngredientBlock = React.forwardRef(
  ({ children, uniqType, ...props }, ref) => {
    return (
      <div className="mb-10" ref={ref}>
        <h3 className="mb-6 text text_type_main-medium">{uniqType}</h3>
        <div className={`${styles.cardContainer}`}>{children}</div>
      </div>
    );
  }
);

IngredientBlock.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  ),
  uniqType: PropTypes.string,
};

export default IngredientBlock;
