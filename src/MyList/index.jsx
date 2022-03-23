import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Teaser from '../components/Teaser';
import { genreFinder } from '../components/Content/genres';

export default function MyList() {
  const { watchList } = useContext(GlobalContext);
  return (
    <main className="main_content">
      <h2 className="main_content--title">My movies</h2>
      <ul className="main_content--results">
        {watchList.length > 0 &&
          watchList.map((result) => (
            <Teaser
              key={result.id}
              id={result.id}
              image={result.backdrop_path}
              add={result}
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
    </main>
  );
}
