import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import requests from '../../config/requests';
import axios from 'axios';

import { Cancel, Search } from '@mui/icons-material';

import usePopup from '../Popup/usePopup';
import Teaser from '../Teaser';

import './search.css';
import '../Popup/popup.css';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // handle Popup || Modal element actions
  const { isOpen, toggle, keyboardEscape } = usePopup();
  // press escape to close Popup || Modal element
  useEffect(() => {
    keyboardEscape();
  });

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

  // console.log(results);

  function onSubmit() {
    results.length > 0 && toggle();
  }

  function DisplayResults({ popup, close }) {
    // handle ARIA attributes
    // prevent body from scrolling when popup is open
    useEffect(() => {
      const bodyRoot = document.querySelector('body');
      const popupRoot = document.getElementById('popup');

      popup && bodyRoot.setAttribute('arias-hidden', 'true');
      popup && popupRoot.setAttribute('arias-hidden', 'false');
      popup && (bodyRoot.style.overflow = 'hidden');

      !popup && bodyRoot.setAttribute('arias-hidden', 'false');
      !popup && (bodyRoot.style.overflow = 'unset');
    }, [popup]);

    return createPortal(
      <>
        {popup && (
          <main
            autoFocus
            id="popup"
            className="modal"
            role="main"
            // onClick={() => {
            //   close();
            // }}
          >
            <button className="modal_close" onClick={close}>
              <Cancel className="modal_close--icon" />
            </button>
            <section className="modal_search">
              <form className="modal_search--form" action="" autoComplete="on">
                {/* <form className="search" action="" autoComplete="on"> */}
                <input
                  className="modal_search--input"
                  type="text"
                  placeholder="Search for a movie"
                  value={query}
                  onChange={onChange}
                />
                <Search className="icon modal_search--submit" />
              </form>

              <h2 className="modal_search--msg">{`${results.length} résultats`}</h2>

              <ul className="main_content--results">
                {results.length > 0 &&
                  results.map((movie) => (
                    <Teaser key={movie.id} movie={movie} />
                  ))}
              </ul>
            </section>
          </main>
        )}
      </>,
      document.body
    );
  }

  return (
    <>
      <form className="search" action="" autoComplete="on">
        <input
          className="search_input"
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={onChange}
        />
        {/* <button className='submit' onClick={onSubmit}>button</button> */}
        <Search className="icon search_submit" />
      </form>
      {/* <button className='submit' onClick={onSubmit}>button</button> */}
      <Search className="submit" onClick={onSubmit} />

      <DisplayResults popup={isOpen} close={toggle} />
    </>
  );
}

// ---------------------------------

// import { useState } from 'react';
// import requests from '../../config/requests';
// import axios from 'axios';

// import { Search } from '@mui/icons-material';
// import Teaser from '../Teaser';

// import './search.css';

// export default function SearchMovie() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   function onChange(event) {
//     event.preventDefault();
//     setQuery(event.target.value);

//     // console.log(requests.search);
//     const search_URL = `${requests.search}${event.target.value}`;

//     async function fetchData() {
//       const request = await axios.get(search_URL);
//       setResults(request.data.results);
//     }

//     fetchData();
//   }

//   // console.log(results);

//   return (
//     <>
//       <form className="search" action="" autoComplete="on">
//         <input
//           className="search_input"
//           type="text"
//           placeholder="Search for a movie"
//           value={query}
//           onChange={onChange}
//         />
//         <Search className="icon search_submit" />
//       </form>
//       <ul className="main_content--results">
//         {results.length > 0 &&
//           results.map((movie) => <Teaser key={movie.id} movie={movie} />)}
//       </ul>
//     </>
//   );
// }
