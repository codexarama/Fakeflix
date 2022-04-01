import { useEffect, useState } from 'react';

import requests from '../../config/requests';
import axios from 'axios';

import usePopup from '../Popup/usePopup';
import Input from './Input';
import Results from './Results';

import './search.css';
import '../Popup/popup.css';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  function onChange(event) {
    event.preventDefault();
    setQuery(event.target.value);

    // console.log(requests.search);
    const search_URL = `${requests.search}${event.target.value}`;

    async function fetchData() {
      const request = await axios.get(search_URL);
      setResults(request.data.results);
    }

    fetchData();
  }

  const [results, setResults] = useState([]);
  // console.log(results);
  function onSubmit() {
    const searchPage = 'search';
    results.length > 0 && toggle(searchPage);
  }

  // handle Popup || Modal component actions
  const { isOpen, toggle, keyboardEscape } = usePopup();
  // press escape to close Popup || Modal component
  useEffect(() => {
    keyboardEscape();
  });

  const mylistPage = 'mylist';

  return (
    <>
      <Input query={query} onChange={onChange} onSubmit={onSubmit} />

      {/* DISPLAYS SEARCH RESULTS IN A MODAL
          AND THE SEARCH INPUT WITH FIRST ENTRIE
          WHICH CAN BE COMPLETED || UPDATED  */}
      <Results
        popup={isOpen}
        close={() => toggle(mylistPage)}
        query={query}
        onChange={onChange}
        results={results}
      />
    </>
  );
}
