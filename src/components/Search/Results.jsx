import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Cancel } from '@mui/icons-material';
import Teaser from '../Teaser';
import Input from './Input';

export default function Results({
  popup,
  close,
  query,
  onChange,
  onSubmit,
  results,
}) {
  // handle ARIA attributes
  // prevent body from scrolling when popup is open
  useEffect(() => {
    const bodyRoot = document.querySelector('body');
    const popupRoot = document.getElementById('popup');

    popup && bodyRoot.setAttribute('arias-hidden', 'true');
    popup && popupRoot.setAttribute('arias-hidden', 'false');
    popup && (bodyRoot.style.overflow = 'hidden');

    !popup && bodyRoot.setAttribute('arias-hidden', 'false');
    !popup && (bodyRoot.style.overflow = 'unset');
  }, [popup]);

  return createPortal(
    <>
      {popup && (
        <main
          autoFocus
          id="popup"
          className="modal"
          role="main"
          // onClick={close}
        >
          <button className="modal_close" onClick={close}>
            <Cancel className="modal_close--icon" />
          </button>
          <section className="modal_search">
            <Input query={query} onChange={onChange} onSubmit={onSubmit} />
            <h2 className="modal_search--msg">{`${results.length} résultats`}</h2>

            <ul className="main_content--results">
              {results.length > 0 &&
                results.map((movie) => <Teaser key={movie.id} movie={movie} />)}
            </ul>
          </section>
        </main>
      )}
    </>,
    document.body
  );
}
