// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/authSelectors';

// /**
//  * - If the route is restricted and the user is logged in,
//  *  render a <Navigate> to redirectTo
//  * - Otherwise render the component
//  */

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/authSelectors';
// import { Navigate } from 'react-router-dom';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// export default RestrictedRoute;

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../src/redux/auth/authSelectors';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
