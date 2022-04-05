import PropTypes from 'prop-types';

import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
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
 * @param   {string}      props.className    [class attribute(s)]
 * @param   {object}      props.addMovie     [movie complete infos]
 * @param   {number}      props.movieId      [movie unique identifier]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Icons({ className, addMovie, movieId }) {
  const { addMovieToWatchList, watchList } = useContext(GlobalContext);
  const { removeMovieFromWatchList } = useContext(GlobalContext);

  let storedMovie = watchList?.find((item) => item.id === addMovie.id);
  const addDisabled = storedMovie ? true : false;

  // const yesSelected = useRef(false);
  const [isYesActive, setIsYesActive] = useState(false);

  // const noSelected = useRef(false);
  const [isNoActive, setIsNoActive] = useState(false);

  // useEffect(() => {
    // yesSelected.current = isYesActive
    // noSelected.current = isNoActive
  // })

  // function rateIsYes() {
  //   setIsYesActive(!isYesActive);
  //   setIsNoActive(false);
  // }

  // function rateIsNo() {
  //   setIsNoActive(!isNoActive);
  //   setIsYesActive(false);
  // }

  const rateIsYes = useCallback(() => {
    setIsYesActive(!isYesActive);
    setIsNoActive(false);
  }, [isYesActive])

  const rateIsNo = useCallback(() => {
    setIsNoActive(!isNoActive);
    setIsYesActive(false);
  }, [isNoActive])

  return (
    <section className={`group_icons ${className}`}>
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
      <button
        // ref={yesSelected}
        className={`icon icon_thumb icon_yes ${
          isYesActive ? 'icon_yes-selected' : ''
        }`}
        onClick={rateIsYes}
        // onClick={() => {
          // setIsYesActive(!isYesActive);
          // setIsNoActive(false);
          // yesSelected.current = setIsYesActive(!isYesActive);
        // }}
      >
        <ThumbUpOffAlt />
      </button>
      <button
        // ref={noSelected}
        className={`icon icon_thumb icon_no ${
          isNoActive ? 'icon_no-selected' : ''
        }`}
        onClick={rateIsNo}
        // onClick={() => {
          // setIsNoActive(!isNoActive);
          // setIsYesActive(false);
          // noSelected.current = setIsNoActive(!isNoActive);
        // }}
      >
        <ThumbDownOffAlt />
      </button>
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
