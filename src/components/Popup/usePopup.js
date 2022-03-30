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
  function escapeToClose(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  function keyboardEscape() {
    window.addEventListener('keydown', escapeToClose);
    return () => window.removeEventListener('keydown', escapeToClose);
  }

  // function escToClose(e) {
  //   if (e.key === 'Escape') {
  //     setIsOpen(false)
  //   }
  // }

  return {
    isOpen,
    toggle,
    keyboardEscape,
  };
}
