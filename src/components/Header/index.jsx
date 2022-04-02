import PropTypes from 'prop-types';

import { IMG_URL } from '../../config/requests';
import noImage from '../../assets/no-image.png';

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
    <header
      className={className}
      style={{
        backgroundImage: `url(
          ${
            movie.backdrop_path === null || undefined
              ? noImage
              : `${IMG_URL}${movie.backdrop_path}`
          }
        )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="vignette"></div>
    </header>
  );
}

/**
 * Header PROPTYPES
 */
Header.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
