import React from "react";
import styles from "./modal-ovrl.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.container}>
        <div className={styles.modal_ovrl} onClick={onClose} />
        {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;