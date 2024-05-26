import { useDispatch, useSelector } from 'react-redux';

import { selectNameFilter } from '../../redux/selectors';
import { filterContacts } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css['search-box']}>
      <label className={css['search-label']} htmlFor="searhbox">
        Find contacts by name
      </label>
      <input
        className={css['search-field']}
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
        placeholder="Input name"
        name="searhbox"
      />
    </div>
  );
}
