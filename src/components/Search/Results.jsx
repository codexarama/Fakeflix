import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Cancel } from '@mui/icons-material';
import Teaser from '../Teaser';
import Input from './Input';

/**
 * Results COMPONENT
 *
 * @param   {object}      props
 * @param   {boolean}     props.popup      [mount || unmount its modal]
 * @param   {function}    props.close      [handle X button click action]
 * @param   {string}      props.query      [any character]
 * @param   {function}    props.onChange   [handle input change]
 * @param   {function}    props.onSubmit   [handle form submit]
 * @param   {array}       props.results    [search results]
 *
 * @returns {Reactnode}   jsx in DOM
 */
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

/**
 * Results PROPTYPES
 */
 Results.propTypes = {
  popup: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  results: PropTypes.array,
};
