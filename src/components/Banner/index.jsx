import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../config/useFetch';
import requests from '../../config/requests';

import SelectMedia from '../Select';
import Header from '../Header';
import { InfoRounded, PlayCircleFilledRounded } from '@mui/icons-material';
import usePopup from '../Popup/usePopup.js';
import Popup from '../Popup';

import './banner.css';

export default function Banner() {
  // get movie data
  const [movie, setMovie] = useState([]);

  const { status, data } = useFetch(requests.fetchTrending);

  // render a random movie
  // re-rendered only if updated data
  useEffect(() => {
    status === 'fetched' &&
      setMovie(data[Math.floor(Math.random() * data.length - 1)]);
  }, [data, status]);

  console.log(movie);

  // handle description length
  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description';
  }

  // handle Popup || Modal element actions
  const { isOpen, toggle, keyboardEscape } = usePopup();

  // press escape to close Popup || Modal element
  useEffect(() => {
    keyboardEscape();
  });

  return (
    <>
      <header className="banner">
        <Header className="banner" movie={movie} />
        <SelectMedia type={movie?.media_type} />
        <article className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
          <p className="banner_description">
            {truncateText(movie?.overview, 150)}
          </p>
          {movie.id && (
            <section className="banner_options">
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
            </section>
          )}
        </article>
      </header>
      <Popup popup={isOpen} close={toggle} movie={movie} />
    </>
  );
}
