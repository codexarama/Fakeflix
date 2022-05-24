import { useEffect } from 'react';
import WatchList from '../../components/Watchlist/WatchList';

/**
 * MyList COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function MyList() {
  useEffect(() => {
    const bodyRoot = document.querySelector('body');
    bodyRoot.style.overflow = 'unset';
  }, []);

  return (
    <main className="main_content">
      <WatchList />
    </main>
  );
}
