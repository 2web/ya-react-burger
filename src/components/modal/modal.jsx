import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "./modaloverlay";

const Modal = ({ children, setVisible, hideDefaultClose }) => {
  const modalRoot = document.getElementById("modal");

  const closePopup = () => {
    setVisible(false)
  }
  
  useEffect(() => {
    function closeByEscape(event) {
      event = event || window.event;
      event.key === "Escape" && closePopup();
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setVisible]);

  
  return createPortal(
    <ModalOverlay
      onClick={closePopup}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {!hideDefaultClose && (
          <div
            className={`${styles.closeButton}`}
            onClick={closePopup}
          >
            <CloseIcon type="primary" />
          </div>
        )}
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  hideDefaultClose: PropTypes.bool,
};

export default Modal;
