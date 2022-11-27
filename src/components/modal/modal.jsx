import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import useAnimation from "../../custom-hooks/use-animation";

const Modal = ({ children, setVisible, hideDefaultClose }) => {
  const modalRef = useRef();
  const rootClasses = [styles.myModal];
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      evt.key === "Escape" && setVisible(false);
    };
  }, [setVisible]);

  useAnimation(modalRef, styles.active, true);

  return createPortal(
    <div
      ref={modalRef}
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {!hideDefaultClose && (
          <div
            className={`${styles.closeButton}`}
            onClick={() => setVisible(false)}
          >
            <CloseIcon type="primary" />
          </div>
        )}{" "}
        {children}
      </div>
    </div>,
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
