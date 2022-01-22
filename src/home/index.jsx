import Navbar from '../components/navbar';
import Feature from '../components/feature';
import Slider from '../components/slider';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <Feature type="movies" />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </main>
  );
}
