import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Link } from 'react-router-dom';

import {
  Check,
  Add,
  PlayCircleFilled,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';

import './buttons.css';

export default function Icons({ className, add, videoLink }) {
  const { addMovieToWatchList, watchList } = useContext(GlobalContext);
  let storedMovie = watchList?.find((item) => item.id === add.id);
  const addDisabled = storedMovie ? true : false;

  return (
    <section className={`group_icons ${className}`}>
      <Link to={`/video/${videoLink}`}>
        <button className="icon icon_play">
          <PlayCircleFilled />
        </button>
      </Link>
      {addDisabled ? (
        <button
          className="icon icon_check"
          disabled={addDisabled}
        >
          <Check />
        </button>
      ) : (
        <button
          className="icon icon_add icon_yes"
          onClick={() => addMovieToWatchList(add)}
        >
          <Add />
        </button>
      )}
      <button className="icon icon_thumb icon_yes">
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no">
        <ThumbDownOffAlt />
      </button>
    </section>
  );
}
