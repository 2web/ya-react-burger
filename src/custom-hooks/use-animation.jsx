import React from 'react';

export function useAnimation(ref, classListAdd, isOpen) {
    React.useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.classList.add(classListAdd)
      }, 0)
    }
  }, [isOpen, ref, classListAdd])
}

export default useAnimation;