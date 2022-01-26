import { InfoRounded, PlayCircleFilledRounded } from '@mui/icons-material';

import Select from 'react-select';
import { options } from './options';

import poster from '../../assets/serie_true-detective_1.jpg';

import './banner.css';

export default function Banner({ type }) {
  return (
    <section className="banner">
      {type && (
        <div className="banner_category">
          <span>{type === 'movie' ? 'Movies' : 'Series'} </span>
          <Select
            name="genre"
            id="genre"
            options={options}
            defaultValue={options[0]}
            className='react_select-container'
            classNamePrefix="react_select"
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#d81f26',
                primary: "#141414",
                backgroundColor: '#141414'
              },
            })}
          />
        </div>
      )}

      <img src={poster} alt="" />
      <article className="banner_content">
        <h1>True detective</h1>
        <p className="banner_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          laborum suscipit saepe? Voluptatibus atque necessitatibus, autem sequi
          pariatur dignissimos magnam incidunt assumenda, optio explicabo quam
          ducimus esse non adipisci.
        </p>
        <div className="banner_options">
          <button className="banner_options--play">
            <PlayCircleFilledRounded />
            Play
          </button>
          <button className="banner_options--more">
            <InfoRounded />
            Info
          </button>
        </div>
      </article>
    </section>
  );
}
