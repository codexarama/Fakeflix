import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Popup from '../Popup';

import './slider.css';

export default function Slider({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef();
  const handleClick = (slide) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 28;

    if (slide === 'previous' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${460 + distance}px)`;
    }

    if (slide === 'next' && slideNumber < 7) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-460 + distance}px)`;
    }
  };

  return (
    <div className="slider">
      <h2 className="slider_title">{title}</h2>
      <div className="slider_wrapper">
        <button
          className="slider_wrapper--nav slider_wrapper--navLeft"
          onClick={() => handleClick('previous')}
        >
          <ArrowBackIosNewOutlined />
        </button>
        <div className="slider_wrapper--content" ref={sliderRef}>
          {movies.map((movie) => (
            // console.log(movie.name)
            <Popup
              key={movie.id}
              // index={movie.index}
              id={movie.id}
              poster={movie.poster_path}
              vote={movie.vote_average * 10}
              title={movie?.title || movie?.name || movie?.original_title}
              genre={movie.genre_ids.join(' · ')}
              date={movie?.release_date || movie?.first_air_date}
              overview={movie?.overview || 'No description'}
            />
          ))}
        </div>
        <button
          className="slider_wrapper--nav slider_wrapper--navRight"
          onClick={() => handleClick('next')}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------
// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import {
//   ArrowBackIosNewOutlined,
//   ArrowForwardIosOutlined,
// } from '@mui/icons-material';

// import Popup from '../Popup';

// import './slider.css';

// export default function Slider({ title, fetchUrl, isPoster }) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/original';
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//     }
//     fetchData();
//   }, [fetchUrl]);

//   console.log(movies);

//   const [slideNumber, setSlideNumber] = useState(0);
//   const sliderRef = useRef();
//   const handleClick = (slide) => {
//     let distance = sliderRef.current.getBoundingClientRect().x - 28;

//     if (slide === 'previous' && slideNumber > 0) {
//       setSlideNumber(slideNumber - 1);
//       sliderRef.current.style.transform = `translateX(${460 + distance}px)`;
//     }

//     if (slide === 'next' && slideNumber < 7) {
//       setSlideNumber(slideNumber + 1);
//       sliderRef.current.style.transform = `translateX(${-460 + distance}px)`;
//     }
//   };

//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="slider">
//       <h2 className="slider_title">{title}</h2>
//       <div className="slider_wrapper">
//         <button
//           className="slider_wrapper--nav slider_wrapper--navLeft"
//           onClick={() => handleClick('previous')}
//         >
//           <ArrowBackIosNewOutlined />
//         </button>
//         <div className="slider_wrapper--content" ref={sliderRef}>
//           {movies.map((movie) => (
//             <div
//               className="slider_wrapper--item"
//               key={movie.id}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//                 <Popup
//                   id={`popup ${movie.id}`}
//                   key={`popup ${movie.id}`}
//                   vote={movie.vote_average * 10}
//                   date={movie?.release_date || movie?.first_air_date}
//                   genre={movie.genre_ids.join(', ')}
//                   overview={movie.overview}
//                 />
//               {/* {isHovered ? (
//                 <Popup
//                   key={`popup ${movie.id}`}
//                   vote={movie.vote_average * 10}
//                   date={movie?.release_date || movie?.first_air_date}
//                   genre={movie.genre_ids.join(', ')}
//                   overview={movie.overview}
//                 />
//               ) : (
// <Link
//   to={`/video/${movie.id}`}
//   key={`poster ${movie.id}`}>
//   <img
//     // src={
//     //   isPoster
//     //     ? `${IMG_URL}/${movie.poster_path}`
//     //     : `${IMG_URL}/${movie.backdrop_path}`
//     // }
//     src={`${IMG_URL}/${movie.poster_path}`}
//     className="slider_wrapper--image"
//     alt={movie?.title || movie?.name || movie?.original_title}
//   />
// </Link>
//               )} */}

//               {/* {isPoster ? null : (
//                     <h3 className="slider_wrapper--title">
//                       {movie?.title || movie?.name || movie?.original_title}
//                     </h3>
//                     )} */}
//             </div>
//           ))}
//         </div>
//         {/* )} */}
//         <button
//           className="slider_wrapper--nav slider_wrapper--navRight"
//           onClick={() => handleClick('next')}
//         >
//           <ArrowForwardIosOutlined />
//         </button>
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------
// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import {
//   ArrowBackIosNewOutlined,
//   ArrowForwardIosOutlined,
// } from '@mui/icons-material';

// import Popup from '../Popup';

// import './slider.css';

// export default function Slider({ title, fetchUrl, isPoster }) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/original';
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//     }
//     fetchData();
//   }, [fetchUrl]);

//   console.log(movies);

//   const [slideNumber, setSlideNumber] = useState(0);
//   const sliderRef = useRef();
//   const handleClick = (slide) => {
//     let distance = sliderRef.current.getBoundingClientRect().x - 28;

//     if (slide === 'previous' && slideNumber > 0) {
//       setSlideNumber(slideNumber - 1);
//       sliderRef.current.style.transform = `translateX(${460 + distance}px)`;
//     }

//     if (slide === 'next' && slideNumber < 7) {
//       setSlideNumber(slideNumber + 1);
//       sliderRef.current.style.transform = `translateX(${-460 + distance}px)`;
//     }
//   };

//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="slider">
//       <h2 className="slider_title">{title}</h2>
//       <div
//         className="slider_wrapper"
//         // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           className="slider_wrapper--nav slider_wrapper--navLeft"
//           onClick={() => handleClick('previous')}
//         >
//           <ArrowBackIosNewOutlined />
//         </button>
//         {isHovered ? (
//           <Popup />
//         ) : (
//           <div className="slider_wrapper--content" ref={sliderRef}>
//             {movies.map((movie) => (
//               <div className="slider_wrapper--item" key={movie.id}>
//                 <Link to={`/video/${movie.id}`}>
//                   <img
//                     // src={
//                     //   isPoster
//                     //     ? `${IMG_URL}/${movie.poster_path}`
//                     //     : `${IMG_URL}/${movie.backdrop_path}`
//                     // }
//                     src={`${IMG_URL}/${movie.poster_path}`}
//                     className="slider_wrapper--image"
//                     alt={movie?.title || movie?.name || movie?.original_title}
//                   />
//                 </Link>
//                 {/* {isPoster ? null : (
//                     <h3 className="slider_wrapper--title">
//                       {movie?.title || movie?.name || movie?.original_title}
//                     </h3>
//                     )} */}
//               </div>
//             ))}
//           </div>
//         )}
//         <button
//           className="slider_wrapper--nav slider_wrapper--navRight"
//           onClick={() => handleClick('next')}
//         >
//           <ArrowForwardIosOutlined />
//         </button>
//       </div>
//     </div>
//   );
// }
