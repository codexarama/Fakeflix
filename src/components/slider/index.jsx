import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import Item from '../item';

import './slider.css';

export default function Slider() {
  return (
    <div className="slider">
      <h2 className="slider-title">Continue to watch</h2>
      <div className="slider-wrapper">
        <button className="sliderArrow left">
          <ArrowBackIosNewOutlined />
        </button>
        <div className="slider-content">
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
          <Item />
          <Item />
        </div>
        <button className="sliderArrow right">
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
}
