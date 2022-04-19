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
 * @param   {string}      props.className         [class attribute(s)]
 * @param   {object}      props.selectedMovie     [movie complete infos]
 * @param   {number}      props.movieId           [movie unique identifier]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Icons({
  movieId,
  selectedMovie,
  voteCount,
  handleVote,
}) {
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
          onClick={() => addMovieToWatchList(selectedMovie)}
        >
          <Add />
        </button>
      )}
      <Raters voteCount={voteCount} handleVote={handleVote} />
    </section>
  );
}

/**
 * Icons PROPTYPES
 */
Icons.propTypes = {
  className: PropTypes.string,
  selectedMovie: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
};
