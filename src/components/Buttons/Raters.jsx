import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

export default function Raters({ voteCount }) {
  const { status, likes, dislikes, handleClickLike, handleClickDislike } =
    useContext(GlobalContext);

  return (
    <div className="group_icons--vote">
      <button
        className={
          status === 'like'
            ? 'icon icon_thumb icon_yes icon_yes--active'
            : 'icon icon_thumb icon_yes'
        }
        onClick={handleClickLike}
      >
        <p className="vote_count">{voteCount + likes}</p>
        <ThumbUpOffAlt />
      </button>
      <button
        className={
          status === 'dislike'
            ? 'icon icon_thumb icon_no icon_no--active'
            : 'icon icon_thumb icon_no'
        }
        onClick={handleClickDislike}
      >
        <p className="vote_count">{voteCount - dislikes}</p>
        <ThumbDownOffAlt />
      </button>
    </div>
  );
}