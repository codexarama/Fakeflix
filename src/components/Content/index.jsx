import PropTypes from 'prop-types';

import './content.css'

/**
 * Content COMPONENT
 * (various content types)
 *
 * @param   {object}      props
 * @param   {string}      props.className    [class attribute(s)]
 * @param   {string}      props.title        [content title]
 * @param   {number}      props.vote         [movie vote]
 * @param   {object}      props.date         [movie date]
 * @param   {object}      props.genre        [movie genre]
 * @param   {string}      props.synopsis     [movie synopsis]
 * @param   {object}      props.casting      [movie casting]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Content({
  className,
  title,
  vote,
  date,
  genre,
  synopsis,
  casting,
}) {
  return (
    <>
      {title && <h2 className="teaser_infos--title">{title}</h2>}
      {genre && <ul className="teaser_infos--genre">{genre}</ul>}
      {vote && (
        <span className={`teaser_infos--vote ${className}`}>
          Recommended at {vote} %
        </span>
      )}
      {date && (
        <span className={`teaser_infos--date ${className}`}> · {date} ·</span>
      )}
      {synopsis && <p className="teaser_infos--synopsis">{synopsis}</p>}
      {casting && (
        <>
          <hr className="separator" />
          <strong>
            <p className="teaser_infos--castingLabel">{'Casting'}</p>
          </strong>
          <hr className="separator" />
          <ul className="teaser_infos--castingList">{casting}</ul>
        </>
      )}
    </>
  );
}

/**
 * Content PROPTYPES
 */
 Content.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  vote: PropTypes.number,
  date: PropTypes.string,
  genre: PropTypes.array,
  synopsis: PropTypes.string,
  casting: PropTypes.array,
};
