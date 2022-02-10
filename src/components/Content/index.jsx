import './content.css'

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
