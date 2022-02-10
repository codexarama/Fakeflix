import { Link } from 'react-router-dom';

import {
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './buttons.css'

export default function Icons({ className, videoLink }) {
  return (
    <section className={`group_icons ${className}`}>
      <Link to={`/video/${videoLink}`}>
        <button className="icon icon_play">
          <PlayCircleFilled />
        </button>
      </Link>
      <button className="icon icon_add icon_yes">
        <Add />
      </button>
      <button className="icon icon_thumb icon_yes">
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no">
        <ThumbDownOffAlt />
      </button>
    </section>
  );
}
