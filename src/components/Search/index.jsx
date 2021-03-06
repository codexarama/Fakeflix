import { useEffect, useState, useRef } from 'react';

import { useFetch } from '../../config/useFetch';
import requests from '../../config/requests';

import Teaser from '../../components/Teaser';

import { Search } from '@mui/icons-material';

import './search.css';

/**
 * SearchMovie COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function SearchMovie() {
  const [query, setQuery] = useState('');

  // useRef Hook allows to persist values between renders
  // and stores a mutable value without causing a re-render when updated.
  // by accessing a DOM element directly.
  const refValue = useRef(query);

  useEffect(() => {
    refValue.current = query;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { status, data } = useFetch(`${requests.search}${query}`);
  const [results, setResults] = useState([]);

  useEffect(() => {
    status === 'fetched' &&
    setResults(data);
  }, [data, status]);

  function onChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
    setResults(data);
  }

  // console.log(query);
  // console.log('results', results);

  return (
    <>
      <form
        className="search_form"
        style={query ? { margin: '5rem auto 1rem' } : { margin: '0 auto' }}
        action="?"
        autoComplete="off"
      >
        <label />
        <input
          className="search_input"
          type="text"
          placeholder="Search for a movie"
          autoFocus
          value={query}
          onChange={onChange}
        />
        <Search className="icon search_submit" />
      </form>
      {query && (
        <>
          <h2 className="search_msg">{`${results.length} résultats`}</h2>
          <ul className="main_content--results">
            {results.length > 0 &&
              results.map((movie) => <Teaser key={movie.id} movie={movie} />)}
          </ul>
        </>
      )}
    </>
  );
}
