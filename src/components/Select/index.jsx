import PropTypes from 'prop-types';

import Select from 'react-select';
import { options } from './options';

import './select.css';

/**
 * SelectGenre COMPONENT
 *
 * @param   {object}      props
 * @param   {boolean}     props.type     [media type : Movie || Serie]

 * @returns {Reactnode}   jsx in DOM
 */
export default function SelectGenre({ type }) {
  return (
    <>
      {type && (
        <section className="banner_category">
          <span>{type === 'movie' ? 'Movie' : 'Serie'}</span>
          <Select
            name="genre"
            id="genre"
            options={options}
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
        </section>
      )}
    </>
  );
}

/**
 * SelectGenre PROPTYPES
 */
 SelectGenre.propTypes = {
  movie: PropTypes.bool,
};
