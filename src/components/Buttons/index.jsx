import PropTypes from 'prop-types';

import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Link } from 'react-router-dom';

import {
  Check,
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

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
export default function Icons({ movieId, selectedMovie, voteCount }) {
  const { addMovieToWatchList, watchList, removeMovieFromWatchList } =
    useContext(GlobalContext);

  let storedMovie = watchList?.find((item) => item.id === movieId);
  const addDisabled = storedMovie ? true : false;

  const { incrementRating, decrementRating, rating, removeVoteFromRating } =
    useContext(GlobalContext);
  let storedVote = rating?.find((item) => item.id === movieId);
  const voteDisabled = storedVote ? true : false;

  if (rating.length > 0) console.log(rating[0].vote_count);

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
      <div className="group_icons--vote">
        {voteDisabled ? (
          <button
            className="icon icon_thumb icon_yes--active"
            onClick={() => removeVoteFromRating(movieId)}
          >
            <p className="vote_count">{rating[0].vote_count}</p>
            {/* <p className="vote_count">{voteCount}</p> */}
            <ThumbUpOffAlt />
          </button>
        ) : (
          <button
            className="icon icon_thumb icon_yes"
            onClick={() => incrementRating(selectedMovie)}
          >
            <p className="vote_count">{voteCount}</p>
            <ThumbUpOffAlt />
          </button>
        )}
        {/* <button
          className="icon icon_thumb icon_no"
          onClick={() => decrementRating(selectedMovie)}
        >
          <p className="vote_count">{voteCount}</p>
          <ThumbDownOffAlt />
        </button> */}
      </div>
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
