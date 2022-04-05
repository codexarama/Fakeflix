import PropTypes from 'prop-types';

import { IMG_URL } from '../../config/requests';
import noBanner from '../../assets/no-banner.png';

/**
 * Header COMPONENT
 *
 * @param   {object}      props
 * @param   {string}      props.className    [class attribute(s)]
 * @param   {array}       props.movie        [movies complete infos]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Header({ className, movie }) {
  return (
    <>
      <div className="vignette"></div>
      <img
        loading="lazy"
        className={className}
        src={
          movie?.backdrop_path === null || undefined
            ? noBanner
            : `${IMG_URL}${movie?.backdrop_path}`
        }
        alt={movie?.title || movie?.name || movie?.original_title}
      />
    </>
  );
}

/**
 * Header PROPTYPES
 */
Header.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
