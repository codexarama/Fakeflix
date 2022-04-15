import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

export default function Raters({ count }) {
  return (
    <div className="group_icons--vote">
      <button className="icon icon_thumb icon_yes">
        <p className="vote_count">{count}</p>
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no">
        <p className="vote_count">{count}</p>
        <ThumbDownOffAlt />
      </button>
    </div>
  );
}
