import { InfoRounded, PlayArrowRounded } from '@mui/icons-material';
import photo from '../../assets/movie_matrix_reloaded_1.jpg';

import './feature.css';

export default function Feature() {
  return (
    <section className="feature">
      <img src={photo} alt="" />
      <article className="feature-content">
        <h1>Matrix</h1>
        <span className="feature-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          laborum suscipit saepe? Voluptatibus atque necessitatibus, autem sequi
          pariatur dignissimos magnam incidunt assumenda, optio explicabo quam
          ducimus esse non adipisci.
        </span>
        <div className="feature-options">
          <button className="feature-options--play">
            <PlayArrowRounded />
            Play
          </button>
          <button className="feature-options--more">
            <InfoRounded />
            Info
          </button>
        </div>
      </article>
    </section>
  );
}
