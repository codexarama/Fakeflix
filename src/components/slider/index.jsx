import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Item from '../Popup'

import './slider.css';

export default function Slider({title, fetchUrl, isPoster}) {

  const BASE_URL = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)

  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef();
  const handleClick = (slide) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 28;

    if (slide === 'previous' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (slide === 'next' && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="slider">
      <h2 className="slider_title">{title}</h2>
      <div className="slider_wrapper">
          <button
          className="slider_arrow slider_arrow--left"
          onClick={() => handleClick('previous')}
        >
          <ArrowBackIosNewOutlined />
        </button>
        <div className="slider_content" ref={sliderRef}>
        {movies.map(movie => (
          <div className="item" key={movie.id}>
            <Link to={`/video/${movie.id}`}>
              {isPoster ? (
                <img
                  src={`${BASE_URL}/${movie.poster_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.name || movie?.original_title}
                />
              ) : (
                <img
                  src={`${BASE_URL}/${movie.backdrop_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.name || movie?.original_title}
                />
              )}
            </Link>
          </div>
        ))}
        </div>
        <button
          className="slider_arrow slider_arrow--right"
          onClick={() => handleClick('next')}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
}
