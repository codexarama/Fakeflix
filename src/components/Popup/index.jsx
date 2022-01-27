import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

import {
  Add,
  PlayCircleFilledRounded,
  ThumbDownAltRounded,
  ThumbUpAltRounded,
} from '@mui/icons-material';

import './popup.css';

export default function Popup() {
  return (
    <>
      <div className="popup_infos">
        <button className="popup_icon">
        <PlayCircleFilledRounded />
          <Add />
          <ThumbUpAltRounded />
          <ThumbDownAltRounded />
        </button>
      </div>
      <div className="popup_infos--header">
        <span>1 hour 14 min</span>
        <span className="popup_age--limit">+16</span>
        <span>1999</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero
        soluta eligendi est quas labore aliquam. Sequi velit, sunt ducimus
        blanditiis porro molestias aliquam ullam rerum aliquid alias reiciendis
        itaque.
      </div>
      <div className="popup_genre">Action</div>
    </>
  );
}
