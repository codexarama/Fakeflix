import { useNavigate } from 'react-router-dom';

import trailer from '../../assets/video_netflix_intro.mp4';

import './video.css';

/**
 * Video COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Video() {
  let history = useNavigate();

  setTimeout(() => {
    history('/');
  }, 5000);

  return (
    <main className="video">
      <video className="video_player" src={trailer} autoPlay={true} />
    </main>
  );
}
