import { useState } from 'react';

import axios from 'axios';
import requests from '../../config/requests';

import Teaser from '../../components/Teaser';
import { genreFinder } from '../../components/Content/genres';

import './search.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function onChange(event) {
    event.preventDefault();
    setQuery(event.target.value);

    const search_URL = requests.search + `${event.target.value}`;

    async function fetchData() {
      const request = await axios.get(search_URL);
      setResults(request.data.results);
    }

    fetchData();
  }
  
  console.log(requests.search);
//   console.log(results);

  return (
    <main className="main_content">
      <form action="" className='search_movie'>
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
      <ul className="main_content--results">
        {results.length > 0 &&
          results.map((result) => (
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
