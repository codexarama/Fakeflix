import { useState } from 'react';
import { Link } from 'react-router-dom';

import trailer from '../../assets/video_netflix_intro.mp4';

import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './teaser.css';

export default function Teaser({
  index,
  id,
  poster,
  title,
  date,
  genre,
  vote,
  overview,
}) {
  const IMG_URL = 'https://image.tmdb.org/t/p/original';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered ? (
        <div
          className="teaser"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video className="teaser_trailer" src={trailer} autoPlay={true} loop />
          <div className="teaser_infos">
            <button className="teaser_icon">
              <PlayCircleFilled />
            </button>
            <button className="teaser_icon">
              <Add />
            </button>
            <button className="teaser_icon">
              <ThumbUpOffAlt />
            </button>
            <button className="teaser_icon">
              <ThumbDownOffAlt />
            </button>
            <p className="teaser_infos--vote">Recommended at {vote} %</p>
            <p className="teaser_infos--date">{date}</p>
            <ul className="teaser_infos--genre">{genre}</ul>
            <p className="teaser_infos--description">{overview}</p>
          </div>
        </div>
      ) : (
        <div
          className="slider_wrapper--item"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to={`/video/${id}`} key={`poster ${id}`}>
            <img
              src={`${IMG_URL}/${poster}`}
              className="slider_wrapper--image"
              alt={title}
            />
          </Link>
        </div>
      )}
    </>
  );
}
