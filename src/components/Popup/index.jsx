import { useState } from 'react';
import { Link } from 'react-router-dom';

import trailer from '../../assets/video_netflix_intro.mp4';

import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './popup.css';

export default function Popup({
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
          className="popup"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video className="popup_trailer" src={trailer} autoPlay={true} loop />
          <div className="popup_infos">
            <button className="popup_icon">
              <PlayCircleFilled />
            </button>
            <button className="popup_icon">
              <Add />
            </button>
            <button className="popup_icon">
              <ThumbUpOffAlt />
            </button>
            <button className="popup_icon">
              <ThumbDownOffAlt />
            </button>
            <p className="popup_infos--vote">Recommended at {vote} %</p>
            <p className="popup_infos--genre">{genre}</p>
            <p className="popup_infos--date">{date}</p>
            <p className="popup_infos--description">{overview}</p>
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
