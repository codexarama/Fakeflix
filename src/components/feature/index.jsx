import { InfoRounded, PlayCircleFilledRounded } from '@mui/icons-material';

import Select from 'react-select';
import { options } from './options';

import poster from '../../assets/movie_matrix_reloaded_1.jpg';

import './feature.css';

export default function Feature({ type }) {
  return (
    <section className="feature">
      {type && (
        <div className="feature-category">
          <span>{type === 'movie' ? 'Movies' : 'Series'} </span>
          <Select
            name="genre"
            id="genre"
            options={options}
            defaultValue={options[0]}
            className='react-select-container'
            classNamePrefix="react-select"
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#d81f26',
                primary: 'black',
                backgroundColor: 'black'
              },
            })}
          />
        </div>
      )}

      <img src={poster} alt="" />
      <article className="feature-content">
        <h1>Matrix</h1>
        <p className="feature-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          laborum suscipit saepe? Voluptatibus atque necessitatibus, autem sequi
          pariatur dignissimos magnam incidunt assumenda, optio explicabo quam
          ducimus esse non adipisci.
        </p>
        <div className="feature-options">
          <button className="feature-options--play">
            <PlayCircleFilledRounded />
            Play
          </button>
          <button className="feature-options--more">
            <InfoRounded />
            Info
          </button>
        </div>
      </article>
    </section>
  );
}
