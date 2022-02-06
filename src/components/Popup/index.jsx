import { createPortal } from 'react-dom';

import { Cancel } from '@mui/icons-material';

import './popup.css';

export default function Popup({
  popup,
  close,
  style,
  title,
  vote,
  description,
  date,
  casting,
  genre,
}) {
  return createPortal(
    <>
      {popup ? (
        <main
          autoFocus
          className="popup"
          role="main"
          // close popup when click outside of element
          onClick={() => {
            close();
          }}
        >
          <article className="popup_content">
            <header className="popup_content--header" style={style}>
              <button className="popup_close" onClick={close}>
                <Cancel className="popup_close--icon" />
              </button>
              <div className='vignette' ></div>
            </header>
            <main className="popup_content--main">
              <h2 className="popup_content--mainTitle">{title}</h2>
              <p className="popup_content--mainVote">Recommended at {vote} %</p>
              <p className="popup_content--mainDescription">{description}</p>
            </main>
            <aside className="popup_content--aside">
              <p className="popup_content--asideCasting">{date}</p>
              <p className="popup_content--asideCasting">{casting}</p>
              <ul className="popup_content--asideGenres">{genre}</ul>
            </aside>
          </article>
        </main>
      ) : null}
    </>,
    document.body
  );
}
