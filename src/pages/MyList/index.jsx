import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

import Teaser from '../../components/Teaser';
import { Search } from '@mui/icons-material';

export default function MyList() {
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
          <Link to={'/search'}>
            <button className="main_content--search">
              <Search className="icon" />
              Find movies
            </button>
          </Link>
        </>
      )}
    </main>
  );
}
