import { useState, useEffect } from 'react';
import axios from 'axios';
import requests, {
  CREDIT_URL_START,
  CREDIT_URL_END,
  // MOVIE_ID,
  IMG_URL,
} from '../../config/requests';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import { options } from './options';

import { InfoRounded, PlayCircleFilledRounded } from '@mui/icons-material';

import usePopup from '../Popup/usePopup.js';
import Popup from '../Popup';

import { genreFinder } from '../Content/genres.js';

import './banner.css';

export default function Banner({ type }) {
  // get movie data
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // console.log(movie);

  // get movie image
  const IMG_PATH = `${movie?.backdrop_path}`;
  // handle banner style for movie image
  const bannerStyle = {
    backgroundImage: `url(${IMG_URL}${IMG_PATH})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  // handle description length
  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description';
  }

  // get casting data

  // console.log(MOVIE_ID);
  // console.log(MOVIE_ID = "ola"); // Cannot set property MOVIE_ID of #<Object> which has only a getter
  // MOVIE_ID = `${movie?.id}`
  // const credits_URL = requests.credits;
  const credits_URL = CREDIT_URL_START + `${movie?.id}` + CREDIT_URL_END;

  const [casting, setCasting] = useState([]);

  useEffect(() => {
    async function fetchCasting() {

      const credits = await axios.get(credits_URL);
      // get the 3 main actors
      if (credits.data.cast.length > 3) credits.data.cast.length = 3;
      setCasting(credits.data.cast);
    }

    fetchCasting();
  }, [credits_URL]);

  // handle popup
  const { isOpen, toggle, escToClose } = usePopup();
  useEffect(() => {
    window.addEventListener('keydown', escToClose);
    return () => window.removeEventListener('keydown', escToClose);
  });

  return (
    <>
      <header className="banner" style={bannerStyle}>
        {type && (
          <div className="banner_category">
            <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
            <Select
              name="genre"
              id="genre"
              options={options}
              defaultValue={options[0]}
              className="react_select-container"
              classNamePrefix="react_select"
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary25: '#d81f26',
                  primary: '#141414',
                  backgroundColor: '#141414',
                },
              })}
            />
          </div>
        )}
        <article className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
          <p className="banner_description">
            {truncateText(movie?.overview, 150)}
          </p>
          {movie.id && (
            <div className="banner_options">
              <Link to={`/video/${movie?.id}`}>
                <button className="banner_options--play">
                  <PlayCircleFilledRounded />
                  Play
                </button>
              </Link>
              <button className="banner_options--info" onClick={toggle}>
                <InfoRounded />
                Info
              </button>
            </div>
          )}
        </article>
        <div className="vignette"></div>
      </header>
      <Popup
        popup={isOpen}
        close={toggle}
        vignette={movie.backdrop_path}
        addMovie={movie}
        movieId={movie.id}
        title={movie?.title || movie?.name || movie?.original_title}
        vote={movie.vote_average * 10}
        synopsis={movie?.overview || 'No description available'}
        date={
          movie?.release_date?.slice(0, -6) ||
          movie?.first_air_date?.slice(0, -6)
        }
        genre={isOpen && genreFinder(movie)}
        casting={casting.map((actor) => (
          <li key={actor?.name} className="teaser_infos--casting">
            {actor?.name}
          </li>
        ))}
      />
    </>
  );
}
