import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../src/redux/auth/authOperations';
import { selectUser } from '../../../src/redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};