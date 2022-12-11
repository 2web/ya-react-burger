import { useEffect } from "react";

export function useAnimation(ref, classListAdd, isOpen) {
  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.classList.add(classListAdd);
      }, 0);
    }
  }, [isOpen, ref, classListAdd]);
}

export default useAnimation;
