import React from "react";
import styles from "./block.module.scss";

interface IIngredientBlock {
  uniqType?: string;
}

const IngredientBlock  = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IIngredientBlock>>(
  ({ children, uniqType }, ref) => {
    return (
      <div className="mb-10" ref={ref}>
        <h3 className="mb-6 text text_type_main-medium">{uniqType}</h3>
        <div className={`${styles.cardContainer}`}>{children}</div>
      </div>
    );
  }
);

export default IngredientBlock;
