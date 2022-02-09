import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../config/requests';

import { Content, Header, Icons } from '../Features';

import './teaser.css';
import '../Features/features.css';

export default function Teaser({
  banner,
  index,
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
    <section
      className="slider_wrapper--item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
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
    </section>
  );
}
