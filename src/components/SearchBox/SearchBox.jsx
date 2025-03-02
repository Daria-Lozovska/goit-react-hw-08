import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={styles.input}
    />
  );
};

export default SearchBox;