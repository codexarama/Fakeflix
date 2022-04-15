import PropTypes from 'prop-types';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Link } from 'react-router-dom';

import { Check, Add, PlayCircleFilled } from '@mui/icons-material';

import Raters from './Raters';

import './buttons.css';

/**
 * Icons COMPONENT
 * (buttons group)
 *
 * @param   {object}      props
 * @param   {string}      props.className    [class attribute(s)]
 * @param   {object}      props.addMovie     [movie complete infos]
 * @param   {number}      props.movieId      [movie unique identifier]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Icons({ addMovie, movieId, count }) {
  const { addMovieToWatchList, watchList, removeMovieFromWatchList } =
    useContext(GlobalContext);

  let storedMovie = watchList?.find((item) => item.id === movieId);
  const addDisabled = storedMovie ? true : false;

  return (
    <section className="group_icons">
      <Link to={`/video/${movieId}`}>
        <button className="icon icon_play">
          <PlayCircleFilled />
        </button>
      </Link>
      {addDisabled ? (
        <button
          className="icon icon_check"
          onClick={() => removeMovieFromWatchList(movieId)}
        >
          <Check />
        </button>
      ) : (
        <button
          className="icon icon_add icon_yes"
          onClick={() => addMovieToWatchList(addMovie)}
        >
          <Add />
        </button>
      )}
      <Raters count={count} />
    </section>
  );
}

/**
 * Icons PROPTYPES
 */
Icons.propTypes = {
  className: PropTypes.string,
  addMovie: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
};
