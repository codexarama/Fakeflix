// CUSTOM POPUP HOOK
import { useState } from 'react';

export default function usePopup() {
  // popup's state
  const [isOpen, setIsOpen] = useState(false);

  // close popup when open
  function toggle() {
    setIsOpen(!isOpen);
  }

  // close popup by pressing escape key when keyboard navigation
  function escToClose(e) {
    if (e.key === 'Escape') {
      toggle();
    }
  }

  return {
    isOpen,
    toggle,
    escToClose,
  };
}
