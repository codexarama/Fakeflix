import { useState, useRef } from 'react';

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Item from '../item';

import './slider.css';

export default function Slider() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const sliderRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 28;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${256 + distance}px)`;
    }

    if (direction === 'right' && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-256 + distance}px)`;
    }
  };

  return (
    <div className="slider">
      <h2 className="slider-title">Continue to watch</h2>
      <div className="slider-wrapper">
        {isMoved ? (
          <button
            className="sliderArrow left"
            onClick={() => handleClick('left')}
          >
            <ArrowBackIosNewOutlined />
          </button>
        ) : null}
        <div className="slider-content" ref={sliderRef}>
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
        {isMoved ?
        <button
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        >
          <ArrowForwardIosOutlined />
        </button> : null
        }
      </div>
    </div>
  );
}
