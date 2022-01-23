import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import vignette from '../../assets/serie_true-detective_2.jpg';
import './item.css';

export default function Item() {
  return (
    <div className="item">
      <img src={vignette} alt="true detective serie vignette" />
      <div className="item_infos">
        <button className="item_icon">
          <PlayArrow />
          <Add />
          <ThumbUpOutlined />
          <ThumbDownOutlined />
        </button>
      </div>
      <div className="item_infos--header">
        <span>1 hour 14 min</span>
        <span className="item_age--limit">+16</span>
        <span>1999</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero
        soluta eligendi est quas labore aliquam. Sequi velit, sunt ducimus
        blanditiis porro molestias aliquam ullam rerum aliquid alias reiciendis
        itaque.
      </div>
      <div className="item_genre">Action</div>
    </div>
  );
}
