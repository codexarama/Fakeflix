// CUSTOM POPUP HOOK
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function usePopup() {
  // popup's state
  const [isOpen, setIsOpen] = useState(false);

  // close popup when open
  function toggle() {
    setIsOpen(!isOpen);
  }

  // // close popup when open
  // // navigate to defined url
  // const navigate = useNavigate()
  // function toggle(url) {
  //   setIsOpen(!isOpen);
  //   navigate( `/${url}`, { replace: true });
  // // console.log(url);
  // }

  // close popup by pressing escape key when keyboard navigation
  function escapeToClose(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  // remove "escapeToClose" event from DOM once occurred
  function keyboardEscape() {
    window.addEventListener('keydown', escapeToClose);
    return () => window.removeEventListener('keydown', escapeToClose);
  }

  return {
    isOpen,
    toggle,
    keyboardEscape,
  };
}
