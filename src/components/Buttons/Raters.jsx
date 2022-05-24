import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

export default function Raters() {
  return (
    <div className="group_icons--vote">
      <button className="icon icon_thumb icon_yes">
        <ThumbUpOffAlt />
      </button>
      <button className="icon icon_thumb icon_no">
        <ThumbDownOffAlt />
      </button>
    </div>
  );
}

// import { ThumbUpOffAlt, ThumbDownOffAlt } from '@mui/icons-material';

// export default function Raters({ status, handleVote, voteCount }) {
//   return (
//     <div className="group_icons--vote">
//       <button
//         className={
//           status === 'add'
//             ? 'icon icon_thumb icon_yes icon_yes--active'
//             : 'icon icon_thumb icon_yes'
//         }
//         onClick={() => handleVote('like')}
//       >
//         <p className="vote_count">{voteCount}</p>
//         <ThumbUpOffAlt />
//       </button>
//       <button
//         className={
//           status === 'remove'
//             ? 'icon icon_thumb icon_no icon_no--active'
//             : 'icon icon_thumb icon_no'
//         }
//         onClick={() => handleVote('dislike')}
//       >
//         <p className="vote_count">{voteCount}</p>
//         <ThumbDownOffAlt />
//       </button>
//     </div>
//   );
// }
