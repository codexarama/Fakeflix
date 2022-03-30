import { IMG_URL } from '../../config/requests';

export default function Header({ className, movie }) {
  return (
    <header
      className={className}
      style={{
        backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="vignette"></div>
    </header>
  );
}
