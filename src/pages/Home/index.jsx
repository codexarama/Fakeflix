import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import data from '../../components/Slider/data';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Banner type="movies" />
      {data.map((slider, index) => (
        <Slider
          key={index}
          title={slider.title}
          fetchUrl={slider.url}
          // isPoster={slider.isPoster}
        />
      ))}
    </main>
  );
}
