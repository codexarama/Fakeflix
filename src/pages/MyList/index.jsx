import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
// import { Link } from 'react-router-dom';

import Teaser from '../../components/Teaser';

import '../../components/Search/search.css';
import SearchMovie from '../../components/Search';

/**
 * MyList COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function MyList() {
  useEffect(() => {
    const bodyRoot = document.querySelector('body');
    bodyRoot.style.overflow = 'unset';
  }, []);

  const { watchList } = useContext(GlobalContext);

  return (
    <main className="main_content">
      <h2 className="main_content--title">My movies</h2>
      {watchList.length > 0 ? (
        <ul className="main_content--results">
          {watchList.map((movie) => (
            <Teaser key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <>
          <p className="main_content--info">No movies in your list yet</p>
          <SearchMovie />
        </>
      )}
    </main>
  );
}
