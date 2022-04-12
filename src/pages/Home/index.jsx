import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import dataInfos from '../../config/dataInfos';

import './home.css';

/**
 * Home COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Home() {
  return (
    <main className="landing-page">
      <Banner />
      {dataInfos.map((data, index) => (
        <Slider
          key={index}
          title={data.title}
          fetchUrl={data.url}
        />
      ))}
    </main>
  );
}
