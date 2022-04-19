import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

export default function Raters({ voteCount, handleVote }) {
// export default function Raters({ addVote, removeVote, handleVote }) {
  return (
    <div className="group_icons--vote">
      <button
        className="icon icon_thumb icon_yes"
        onClick={() => handleVote('add')}
      >
        <p className="vote_count">{voteCount}</p>
        <ThumbUpOffAlt />
      </button>
      <button
        className="icon icon_thumb icon_no"
        onClick={() => handleVote('remove')}
      >
        <p className="vote_count">{voteCount}</p>
        <ThumbDownOffAlt />
      </button>
    </div>
  );
}
