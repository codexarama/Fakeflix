import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './popup.css';

export default function Popup({ date, genre, vote, overview }) {
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
      <div className="popup">
      <video className="popup_trailer" src={trailer} autoPlay={true} loop />
        <button className="popup_icon">
          <PlayCircleFilled />
        </button>
        <button className="popup_icon">
          <Add />
        </button>
        <button className="popup_icon">
          <ThumbUpOffAlt />
        </button>
        <button className="popup_icon">
          <ThumbDownOffAlt />
        </button>
          <p className="popup_infos--vote">Recommended at {vote} %</p>
          <p className="popup_infos--date">{date}</p>
          <p className="popup_infos--description">{overview}</p>
          <p className="popup_infos--genre">{genre}</p>
      </div>
  );
}
