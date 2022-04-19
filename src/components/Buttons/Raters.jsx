import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

export default function Raters({ voteCount, selectedMovie }) {
  const { handleClickLike, handleClickDislike } = useContext(GlobalContext);

  return (
    <div className="group_icons--vote">
      <button className="icon icon_thumb icon_yes" onClick={() => handleClickLike(selectedMovie)}>
        <p className="vote_count">{voteCount}</p>
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no" onClick={() => handleClickDislike(selectedMovie)}>
        <p className="vote_count">{voteCount}</p>
        <ThumbDownOffAlt />
      </button>
    </div>
  );
}
