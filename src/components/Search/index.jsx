import { useEffect, useState, useRef } from 'react';
import requests from '../../config/requests';
import axios from 'axios';
import Teaser from '../../components/Teaser';

import { Search } from '@mui/icons-material';

import './search.css';

/**
 * SearchMovie COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function SearchMovie() {
  const [value, setValue] = useState('');

  // useRef Hook allows to persist values between renders
  // and stores a mutable value without causing a re-render when updated.
  // by accessing a DOM element directly.
  const refValue = useRef(value);

  useEffect(() => {
    refValue.current = value;
  });

  const [results, setResults] = useState([]);

  function onChange(event) {
    event.preventDefault();
    setValue(event.target.value);
    // console.log(requests.search);
    const search_URL = `${requests.search}${event.target.value}`;

    async function fetchData() {
      const request = await axios.get(search_URL);
      setResults(request.data.results);
    }

    fetchData();
  }

  // console.log(results);

  return (
    <>
      <form
        className="search_form"
        style={value ? { margin: '5rem auto 1rem' } : { margin: '0 auto' }}
        action="?"
        autoComplete="off"
      >
        <label />
        <input
          className="search_input"
          type="text"
          placeholder="Search for a movie"
          autoFocus
          value={value}
          onChange={onChange}
        />
        <Search className="icon search_submit" />
      </form>
      {value && (
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
