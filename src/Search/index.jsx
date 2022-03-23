import { useState } from 'react';

import { BASE_URL, REACT_APP_API_KEY } from '../config/requests';
import axios from 'axios';

import Teaser from '../components/Teaser';
import { genreFinder } from '../components/Content/genres';

import './search.css';

export default function Search(event) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function onChange(event) {
    event.preventDefault();
    setQuery(event.target.value);

    const search = `${BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${event.target.value}&page=1`;

    async function fetchData() {
      const request = await axios.get(search);
      setResults(request.data.results);
    }

    fetchData();
  }

//   console.log(results);

  return (
    <main className="search_page">
      <form action="">
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="Search for a movie"
            autoComplete="off"
            value={query}
            onChange={onChange}
          />
        </label>
      </form>
      <ul className="search_results">
        {results.length > 0 &&
          results.map((result) => (
            <Teaser
              key={result.id}
              image={result}
              id={result.id}
              banner={result.backdrop_path}
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
