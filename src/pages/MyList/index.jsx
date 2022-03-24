import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

import Teaser from '../../components/Teaser';
import { genreFinder } from '../../components/Content/genres';
import { Search } from '@mui/icons-material';

export default function MyList() {
  const { watchList } = useContext(GlobalContext);

  return (
    <main className="main_content">
      <h2 className="main_content--title">My movies</h2>
      {watchList.length > 0 ? (
        <ul className="main_content--results">
          {watchList.map((result) => (
            <Teaser
              key={result.id}
              movieId={result.id}
              image={result.backdrop_path}
              addMovie={result}
              poster={result.poster_path}
              vote={result.vote_average * 10}
              title={result?.title || result?.name || result?.original_title}
              genre={genreFinder(result)}
              date={
                result.release_date?.slice(0, -6) ||
                result.first_air_date?.slice(0, -6)
              }
              synopsis={result?.overview || 'No description available'}
            />
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
