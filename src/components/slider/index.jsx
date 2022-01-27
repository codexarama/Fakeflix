import { useState, useRef } from 'react';
// import { slides } from './data';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Item from '../Item';

import './slider.css';

export default function Slider() {
  const [slideNumber, setSlideNumber] = useState(0);

  const sliderRef = useRef();

  const handleClick = (slide) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 28;

    if (slide === 'previous' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (slide === 'next' && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="slider">
      <h2 className="slider_title">Continue to watch</h2>
      <div className="slider_wrapper">
          <button
          className="slider_arrow slider_arrow--left"
          onClick={() => handleClick('previous')}
        >
          <ArrowBackIosNewOutlined />
        </button>
        <div className="slider_content" ref={sliderRef}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <button
          className="slider_arrow slider_arrow--right"
          onClick={() => handleClick('next')}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
}
