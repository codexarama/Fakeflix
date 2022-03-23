import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../config/requests';

import Header from '../Header';
import Icons from '../Buttons';
import Content from '../Content';

import './teaser.css';

export default function Teaser({
  banner,
  id,
  poster,
  title,
  date,
  genre,
  vote,
  synopsis,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={isHovered ? "slider_wrapper--teaser" : "slider_wrapper--item"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <Header
            className="slider_teaser--header"
            style={{
              backgroundImage: `url(${IMG_URL}${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
          <main className="teaser_infos">
            <Icons />
            <Content
              genre={genre}
              className="specific_style"
              vote={vote}
              date={date}
              synopsis={synopsis}
            />
          </main>
        </>
      ) : (
        <Link to={`/video/${id}`} key={`poster ${id}`}>
          <img
            src={`${IMG_URL}${poster}`}
            className="slider_wrapper--image"
            alt={title}
          />
        </Link>
      )}
    </li>
  );
}
