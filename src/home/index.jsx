import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Slider from '../components/slider';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
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
