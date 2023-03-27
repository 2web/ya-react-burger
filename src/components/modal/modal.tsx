import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useEffect } from "react";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";

import ModalOverlay from "./modaloverlay";

type TMyModal = {
  children?: JSX.Element|JSX.Element[];
  setVisible?: Function;
  hideDefaultClose?: boolean;
  modalGoBack?: Function;
}

const Modal: FC<TMyModal> = ({ children, setVisible, hideDefaultClose, modalGoBack }) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  const closePopup = () => {
    if (modalGoBack) {
      modalGoBack();
    }
    if (setVisible){
      setVisible(false);
    }
  }
  
  useEffect(() => {
    function closeByEscape(event: { key: string; }) {
      event = event || window.event;
      event.key === "Escape" && closePopup();
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!children) return null;

  return createPortal(
    <ModalOverlay onClick={closePopup}>
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

export default Modal;
