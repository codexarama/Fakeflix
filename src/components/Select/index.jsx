import Select from 'react-select';
import { options } from './options';

import './select.css';

export default function SelectMedia({ type }) {
  return (
    <>
      {type && (
        <section className="banner_category">
          <span>{type === 'movie' ? 'Movie' : 'Serie'}</span>
          <Select
            name="genre"
            id="genre"
            options={options}
            defaultValue={options[0]}
            className="react_select-container"
            classNamePrefix="react_select"
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#d81f26',
                primary: '#141414',
                backgroundColor: '#141414',
              },
            })}
          />
        </section>
      )}
    </>
  );
}
