import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Content, Header, Icons } from '../../Features';

import './teaser.css';
import '../../Features/features.css';

export default function Teaser({
  image,
  index,
  id,
  poster,
  title,
  date,
  genre,
  vote,
  synopsis,
}) {
  const IMG_URL = 'https://image.tmdb.org/t/p/original';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered ? (
        <section
          className="slider_teaser"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Header
            className="slider_teaser--header"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${image?.backdrop_path}")`,
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
        </section>
      ) : (
        <section
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
        </section>
      )}
    </>
  );
}
