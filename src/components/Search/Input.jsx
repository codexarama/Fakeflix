import PropTypes from 'prop-types';

import { Search } from '@mui/icons-material';

/**
 * Input COMPONENT
 *
 * @param   {object}      props
 * @param   {string}      props.query      [any character]
 * @param   {function}    props.onChange   [handle input change]
 * @param   {function}    props.onSubmit   [handle form submit]
 *
 * @returns {Reactnode}   jsx in DOM
 */
export default function Input({ query, onChange, onSubmit }) {
  return (
    <form className="modal_search--form" action="" autoComplete="on">
      <label/>
      <input
        className="modal_search--input"
        type="text"
        placeholder="Search for a movie"
        autoFocus
        value={query}
        onChange={onChange}
      />
      <Search className="icon modal_search--submit" onClick={onSubmit} />
    </form>
  );
}

/**
 * Input PROPTYPES
 */
 Input.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
