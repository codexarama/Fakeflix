import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import data from '../../components/Slider/data';

import './home.css';

/**
 * Home COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Home() {
  return (
    <main className="landing-page">
      <Banner />
      {data.map((slider, index) => (
        <Slider
          key={index}
          title={slider.title}
          fetchUrl={slider.url}
        />
      ))}
    </main>
  );
}
