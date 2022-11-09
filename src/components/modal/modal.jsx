import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-ovrl/modal-ovrl";
import ModalHeader from "../modal-head/modal-head";
import useAnimation from '../../custom-hooks/use-animation';

import styles from "./modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ header, children, isOpened, onClose, handleCloseOverlay }) => {
    const modalRef = React.useRef();
  
    useAnimation(modalRef, styles.visible, isOpened);
  
    if (!isOpened) return null;
  
    return ReactDOM.createPortal(
        <ModalOverlay onClose={handleCloseOverlay}>
            <div className={styles.main} ref={modalRef}>
                <ModalHeader onClose={onClose} header={header} />
                {children}
            </div>
        </ModalOverlay>, document.getElementById('modal')
    );
}

Modal.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element,
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleCloseOverlay: PropTypes.func.isRequired
};
  
export default Modal;
