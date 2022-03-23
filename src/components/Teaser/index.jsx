import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../config/requests';

import Icons from '../Buttons';
import Content from '../Content';

import './teaser.css';

export default function Teaser({
  image,
  add,
  title,
  date,
  genre,
  vote,
  synopsis,
  id,
  poster,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={isHovered ? 'slider_wrapper--teaser' : 'slider_wrapper--item'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <header
            className="teaser_header"
            style={{
              backgroundImage: `url(${IMG_URL}${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="teaser_vignette"></div>
          </header>
          <main className="teaser_infos">
            <Icons add={add} />
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
          <img src={`${IMG_URL}${poster}`} className="item_image" alt={title} />
        </Link>
      )}
    </li>
  );
}
