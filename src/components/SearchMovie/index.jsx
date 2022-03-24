import { useState } from 'react';
import requests from '../../config/requests';
import axios from 'axios';

import { Search } from '@mui/icons-material';
import Teaser from '../Teaser';
import { genreFinder } from '../Content/genres';

import './search.css';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
        <Search className="icon search_submit" />
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
    </>
  );
}

// ---------------------------------
// import { useState } from 'react';
// import { BASE_URL, REACT_APP_API_KEY } from '../../config/requests';
// import axios from 'axios';

// import { createPortal } from 'react-dom';

// import { Search } from '@mui/icons-material';
// import Teaser from '../Teaser';
// import { genreFinder } from '../Content/genres';

// import './search.css';

// export default function SearchMovie({ search, close }) {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   function onChange(event) {
//     event.preventDefault();
//     setQuery(event.target.value);

//     const search = `${BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${event.target.value}&page=1`;

//     async function fetchData() {
//       const request = await axios.get(search);
//       setResults(request.data.results);
//     }

//     fetchData();
//   }

//     // console.log(results);

//   return createPortal(
//     <>
//       {search ? (
//         <main autoFocus className="modal" role="main">
//           <button className="modal_close" aria-label="Close" onClick={close}>
//             X
//           </button>

//           <form className="search" action="" autoComplete="on">
//             <input
//               className="search_input"
//               type="text"
//               placeholder="Search for a movie"
//               value={query}
//               onChange={onChange}
//             />
//             <Search className="icon search_submit" />
//           </form>
//           <ul className="main_content--results">
//             {results.length > 0 &&
//               results.map((result) => (
//                 <Teaser
//                   key={result.id}
//                   id={result.id}
//                   image={result.backdrop_path}
//                   add={result}
//                   poster={result.poster_path}
//                   vote={result.vote_average * 10}
//                   title={
//                     result?.title || result?.name || result?.original_title
//                   }
//                   genre={genreFinder(result)}
//                   date={
//                     result.release_date?.slice(0, -6) ||
//                     result.first_air_date?.slice(0, -6)
//                   }
//                   synopsis={result?.overview || 'No description available'}
//                 />
//               ))}
//           </ul>
//         </main>
//       ) : null}
//     </>,
//     document.body
//   );
// }
