import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import { genreFinder } from '../Content/genres.js';
import Teaser from '../Teaser';

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
          {movies.map((movie) => (
            <Teaser key={movie.id} movie={movie} />
          ))}
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
