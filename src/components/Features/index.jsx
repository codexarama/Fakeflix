import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import trailer from '../../assets/video_netflix_intro.mp4';

import './features.css';

function Icons({ className, videoLink }) {
  return (
    <section className={`group_icons ${className}`}>
      <Link to={`/video/${videoLink}`}>
        <button className="icon icon_play">
          <PlayCircleFilled />
        </button>
      </Link>
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

function Content({ className, title, vote, date, genre, synopsis, casting }) {
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

function Video() {
  useEffect(() => {
    document
      .querySelectorAll('nav, footer')
      .forEach((item) => (item.style.display = 'none'));
  }, []);

  return (
    <main className="video">
      <video className="video_teaser" src={trailer} autoPlay={true} loop />
    </main>
  );
}

export { Icons, Header, Content, Video };
