import PropTypes from 'prop-types';

import { useState, useRef, useMemo } from 'react';
import { useFetch } from '../../config/useFetch';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Teaser from '../Teaser';

import './slider.css';

/**
 * Slider COMPONENT
 *
 * @param   {object}      props
 * @param   {string}      props.title     [title of each thematic slider]
 * @param   {string}      props.fetchUrl  [url of each category]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Slider({ title, fetchUrl }) {
  // gets fetched data from external server (tmdb)
  const { status, data, error } = useFetch(fetchUrl);

  // data to display
  function displayData(data) {
    return data.map((movie) => (
      <Teaser key={movie.id} movie={movie} />
    ));
  }

  // caches data after the request to prevent
  // unnecessary re-renders of the Teaser component
  // by using memoization hook : useMemo
  const results = useMemo(() => displayData(data), [data]);

  // manages the forward or backward movement of the slider
  // by clicking on the direction arrows
  const [slideNumber, setSlideNumber] = useState(0);

  const sliderRef = useRef();

  const handleClick = (slide) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 28;

    if (slide === 'previous' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${514 + distance}px)`;
    }

    if (slide === 'next' && slideNumber < 7) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-514 + distance}px)`;
    }
  };

  return (
    <section className="slider">
      <h2 className="slider_title">{title}</h2>
      <div className="slider_wrapper">
        <button
          className="slider_wrapper--nav slider_wrapper--navLeft"
          onClick={() => handleClick('previous')}
        >
          <ArrowBackIosNewOutlined />
        </button>
        <ul className="slider_wrapper--content" ref={sliderRef}>
          {status === 'error' && <div>{error}</div>}
          {status === 'loading' && <div className="loading"></div>}
          {status === 'fetched' && results}
        </ul>
        <button
          className="slider_wrapper--nav slider_wrapper--navRight"
          onClick={() => handleClick('next')}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </section>
  );
}

/**
 * Slider PROPTYPES
 */
Slider.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};
