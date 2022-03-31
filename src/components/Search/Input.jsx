import { Search } from '@mui/icons-material';

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
