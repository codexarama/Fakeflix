import Banner from '../components/Banner';
import Slider from '../components/Slider';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Banner type="movies" />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </main>
  );
}
