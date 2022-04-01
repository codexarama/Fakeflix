import { useEffect } from 'react';

import error from '../../assets/404.gif';
import './error.css'

/**
 * Error COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Error() {
  useEffect(() => {
    document
      .querySelector('footer').style.display = 'none';
  }, []);

  return (
    <main className='error'>
      <img src={error} alt="error page animation" />
    </main>
  );
}
