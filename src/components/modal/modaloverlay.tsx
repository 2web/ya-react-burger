import { useRef } from "react";
import styles from "./modal.module.scss";
import useAnimation from "../../custom-hooks/use-animation";

const ModalOverlay = ({ children, onClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const rootClasses = [styles.myModal];

  useAnimation(modalRef, styles.active, true);

  return (
    <div ref={modalRef} className={rootClasses.join(" ")} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;
