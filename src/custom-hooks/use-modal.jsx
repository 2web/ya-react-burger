import React from "react";

function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCloseOverlay = (e) => {
    e.target === e.currentTarget && handleClose(false);
  };

  React.useEffect(() => {
    const handleEscapeKey = (e) => {
      e.key === "Escape" && setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      }
    }
  }, [isOpen, setIsOpen]);

  return { isOpen, handleOpen, handleClose, handleCloseOverlay }
}

export default useModal;