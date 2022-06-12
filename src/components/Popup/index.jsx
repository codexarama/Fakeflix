import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import axios from 'axios';
import requests, { API_KEY } from '../../config/requests';

import { Cancel } from '@mui/icons-material';

import Header from '../Header';
import Icons from '../Buttons';
import Content from '../Content';
import { displayGenres } from '../Content/genres';

import './popup.css';

/**
 * Popup COMPONENT
 *
 * @param   {object}      props
 * @param   {boolean}     props.popup     [mount || unmount its modal]
 * @param   {function}    props.close     [handle X button click action]
 * @param   {array}       props.movie     [movie complete infos]
 * @returns {Reactnode}   jsx in DOM
 */
export default function Popup({ popup, close, movie }) {
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

  const [casting, setCasting] = useState([]);
  const castingAPI = `${requests.apiMovie}${movie?.id}${requests.credits}`;
  // console.log(castingAPI);

  useEffect(() => {
    async function fetchCasting() {
      const credits = await axios.get(castingAPI, {
        params: {
          api_key: API_KEY,
        },
      });

      // get the 3 main actors
      if (credits.data.cast.length > 3) credits.data.cast.length = 3;
      setCasting(credits.data.cast);
    }

    fetchCasting();
  }, [castingAPI]);

  return createPortal(
    <>
      {popup && (
        <main
          autoFocus
          id="popup"
          className="popup"
          role="main"
          // onClick={() => {
          //   close();
          // }}
        >
          <section className="popup_container">
            <button className="popup_close" onClick={close}>
              <Cancel className="popup_close--icon" />
            </button>
            <Header className="popup_header" movie={movie} />
            <Icons
              className={'popup_icons'}
              selectedMovie={movie}
              movieId={movie?.id}
            />
            <section className="popup_main">
              <article className="popup_content">
                <Content
                  title={movie?.title || movie?.name || movie?.original_title}
                  vote={movie?.vote_average * 10}
                  synopsis={movie?.overview || 'No description available'}
                />
              </article>
              <aside className="popup_aside">
                <Content
                  date={
                    movie.release_date?.slice(0, -6) ||
                    movie.first_air_date?.slice(0, -6)
                  }
                  casting={casting.map((actor) => (
                    <li key={actor?.name} className="teaser_infos--casting">
                      {actor?.name}
                    </li>
                  ))}
                  genre={displayGenres(movie)}
                />
              </aside>
            </section>
          </section>
        </main>
      )}
    </>,
    document.body
  );
}

/**
 * Popup PROPTYPES
 */
Popup.propTypes = {
  popup: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  movie: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
