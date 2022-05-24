import PropTypes from 'prop-types';

import { useState } from 'react';
// import { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';
import { IMG_URL } from '../../config/requests';
import noPoster from '../../assets/no-poster.png';

import Header from '../Header';
import Icons from '../Buttons';
import Content from '../Content';
import { displayGenres } from '../Content/genres';

import './teaser.css';

/**
 * Teaser COMPONENT
 *
 * @param   {object}      props
 * @param   {object}      props.movie     [movie complete infos]

 * @returns {Reactnode}   jsx in DOM
 */
export default function Teaser({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  // const [status, setStatus] = useState('');
  // const [hasVote, setHasVote] = useState(false);
  // const [voteCount, setVoteCount] = useState(movie.vote_count);

  // const handleVote = useCallback(
  //   (status) => {
  //     if (status === 'like') {
  //       setStatus('add');
  //       setHasVote(!hasVote);
  //       setVoteCount(voteCount + 1);
  //       if (hasVote) {
  //         setStatus(null);
  //         setVoteCount(voteCount - 1);
  //       }
  //     }

  //     if (status === 'dislike') {
  //       setStatus('remove');
  //       setHasVote(!hasVote);
  //       setVoteCount(voteCount - 1);
  //       if (hasVote) {
  //         setStatus(null);
  //         setVoteCount(voteCount + 1);
  //       }
  //     }
  //   },
  //   [hasVote, voteCount]
  // );

  // function handleVote(status) {
  //   if (status === 'like') {
  //     setStatus('add');
  //     setHasVote(!hasVote);
  //     setVoteCount(voteCount + 1);
  //     if (hasVote) {
  //       setStatus(null);
  //       setVoteCount(voteCount - 1);
  //     }
  //   }

  //   if (status === 'dislike') {
  //     setStatus('remove');
  //     setHasVote(!hasVote);
  //     setVoteCount(voteCount - 1);
  //     if (hasVote) {
  //       setStatus(null);
  //       setVoteCount(voteCount + 1);
  //     }
  //   }
  // }

  return (
    <li
      className={isHovered ? 'slider_wrapper--teaser' : 'slider_wrapper--item'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered ? (
      <>
        <header>
          <Header className="teaser_header" movie={movie} />
        </header>
        <main className="teaser_infos">
          <Icons
            selectedMovie={movie}
            movieId={movie?.id}
            // handleVote={handleVote}
            // status={status}
            // voteCount={voteCount}
          />
          <Content
            genre={displayGenres(movie)}
            className="specific_style"
            vote={movie?.vote_average * 10}
            // get only yyyy from format date yyyy-mm-dd
            // THE SECRET : add "?" after key "realease_date" || "first_air_date"
            date={
              movie.release_date?.slice(0, -6) ||
              movie.first_air_date?.slice(0, -6)
            }
            synopsis={movie?.overview || 'No description available'}
          />
        </main>
      </>
      ) : (
        <Link to={`/video/${movie?.id}`} key={`poster ${movie?.id}`}>
          <img
            loading="lazy"
            src={
              movie?.poster_path === null || undefined
                ? noPoster
                : `${IMG_URL}${movie?.poster_path}`
            }
            className="item_image"
            alt={movie?.title || movie?.name || movie?.original_title}
          />
        </Link>
      )}
    </li>
  );
}

/**
 * Teaser PROPTYPES
 */
Teaser.propTypes = {
  movie: PropTypes.object.isRequired,
};
