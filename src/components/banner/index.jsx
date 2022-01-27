import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../../config/requests';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import { options } from './options';

import { InfoRounded, PlayCircleFilledRounded } from '@mui/icons-material';

import './banner.css';

export default function Banner({ type }) {
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

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description';
  }

  const bannerPlayer = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <header className="banner" style={bannerPlayer}>
      {type && (
        <div className="banner_category">
          <span>{type === 'movie' ? 'Movies' : 'Series'} </span>
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
            <Link to={`/video/${movie?.id}`}></Link>
            <button className="banner_options--play">
              <PlayCircleFilledRounded />
              Play
            </button>
            <button className="banner_options--info">
              <InfoRounded />
              Info
            </button>
          </div>
        )}
      </article>
    </header>
  );
}
