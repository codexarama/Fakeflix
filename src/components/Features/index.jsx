import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './features.css';

function Icons({ className }) {
  return (
    <section className={`group_icons ${className}`}>
      <button className="icon icon_play">
        <PlayCircleFilled />
      </button>
      <button className="icon icon_add icon_yes">
        <Add />
      </button>
      <button className="icon icon_thumb icon_yes">
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no">
        <ThumbDownOffAlt />
      </button>
    </section>
  );
}

function Header({ className, style }) {
  return (
    <header className={`teaser_header ${className}`} style={style}>
      <div className="teaser_vignette"></div>
    </header>
  );
}

function Content({
  className,
  title,
  vote,
  date,
  genre,
  synopsis,
  casting,
  separator,
}) {
  return (
    <>
      {title && <h2 className="teaser_infos--title">{title}</h2>}
      {genre && <ul className="teaser_infos--genre">{genre}</ul>}
      {vote && (
        <span className="teaser_infos--vote">Recommended at {vote} %</span>
      )}
      {date && <span className="teaser_infos--date"> · {date} ·</span>}
      {synopsis && <p className="teaser_infos--synopsis">{synopsis}</p>}
      {casting && (
        <>
          <hr className="separator" />
          <p className="teaser_infos--castingLabel">{'Casting'}</p>
          <hr className="separator" />
          <ul className="teaser_infos--castingList">{casting}</ul>
        </>
      )}
    </>
  );
}

export { Icons, Header, Content };
