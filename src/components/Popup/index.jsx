import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Cancel } from '@mui/icons-material';
import { Content, Header, Icons } from '../Features';

import './popup.css';
import '../Features/features.css';

export default function Popup({
  popup,
  close,
  style,
  title,
  vote,
  synopsis,
  date,
  casting,
  genre,
}) {
  // handle ARIA attributes
  // prevent body from scrolling when popup is open
  useEffect(() => {
    const popupRoot = document.getElementById('popup');

    popup && document.body.setAttribute('arias-hidden', 'true');
    popup && popupRoot.setAttribute('arias-hidden', 'false');
    popup && (document.body.style.overflow = 'hidden');

    !popup && document.body.setAttribute('arias-hidden', 'false');
    !popup && (document.body.style.overflow = 'unset');
  }, [popup]);

  return createPortal(
    <>
      {popup && (
        <main
          autoFocus
          id="popup"
          className="popup"
          role="main"
          onClick={() => {
            close();
          }}
        >
          <section className="popup_container">
            <button className="popup_close" onClick={close}>
              <Cancel className="popup_close--icon" />
            </button>
            <Header className={'banner_popup--header'} style={style} />
            <Icons className={'popup_icons'} />
            <article className="popup_content">
              <main className="popup_main">
                <Content title={title} vote={vote} synopsis={synopsis} />
              </main>
              <aside className="popup_aside">
                <Content date={date} casting={casting} genre={genre} />
              </aside>
            </article>
          </section>
        </main>
      )}
    </>,
    document.body
  );
}
