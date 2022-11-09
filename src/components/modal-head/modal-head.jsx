import React from "react";
import styles from "./modal-head.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ModalHeader = ({ header, onClose }) => {
  return (
    <div className={styles.header}>
      <p className="text text_type_main-large">{header}</p>
      <div className={styles.close} onClick={onClose}>
        <CloseIcon type="primary" />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;