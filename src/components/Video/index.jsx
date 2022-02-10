import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import trailer from '../../assets/video_netflix_intro.mp4';

import './video.css';

export default function Video() {
  useEffect(() => {
    document
      .querySelectorAll('nav, footer')
      .forEach((item) => (item.style.display = 'none'));
  }, []);

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
