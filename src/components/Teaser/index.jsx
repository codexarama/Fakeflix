import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../config/requests';

import Icons from '../Buttons';
import Content from '../Content';
import { genreFinder } from '../Content/genres';

import './teaser.css';

export default function Teaser({ movie }) {
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
              backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="teaser_vignette"></div>
          </header>
          <main className="teaser_infos">
            <Icons addMovie={movie} movieId={movie.id} />
            <Content
              genre={genreFinder(movie)}
              className="specific_style"
              vote={movie.vote_average * 10}
              // get only yyyy from format date yyyy-mm-dd
              // THE SECRET : add "?" after key "realease_date" || "first_air_date"
              date={
                movie.release_date?.slice(0, -6) ||
                movie.first_air_date?.slice(0, -6)
              }
              synopsis={movie?.overview || 'No description available'}
            />
          </main>
        </>
      ) : (
        <Link to={`/video/${movie.id}`} key={`poster ${movie.id}`}>
          <img
            src={`${IMG_URL}${movie.poster_path}`}
            className="item_image"
            alt={movie?.title || movie?.name || movie?.original_title}
          />
        </Link>
      )}
    </li>
  );
}
