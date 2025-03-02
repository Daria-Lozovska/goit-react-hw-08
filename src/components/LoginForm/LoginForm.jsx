// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/auth/authOperations';
// import css from './LoginForm.module.css';

// // export const LoginForm = () => {
// //   const dispatch = useDispatch();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const form = e.currentTarget;

// //     dispatch(
// //       login({
// //         email: form.elements.email.value,
// //         password: form.elements.password.value,
// //       })
// //     )
// //       .unwrap()
// //       .then(() => {
// //         console.log('login success');
// //       })
// //       .catch(() => {
// //         console.log('login error');
// //       });

// //     form.reset();
// //   };

// //   return (
// //     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
// //       <label className={css.label}>
// //         Email
// //         <input type="email" name="email" />
// //       </label>
// //       <label className={css.label}>
// //         Password
// //         <input type="password" name="password" />
// //       </label>
// //       <button type="submit">Log In</button>
// //     </form>
// //   );
// // };

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const FeedbackSchema = Yup.object().shape({
//     email: Yup.string()
//       .min(5, 'Too Short!')
//       .max(50, 'Too Long!')
//       .email('Must be a valid email')
//       .required('Required'),
//     password: Yup.string()
//       .min(8, 'Too Short!')
//       .max(13, 'Too Long!')
//       .required('Required'),
//   });

//   const onSubmit = (values, actions) => {
//     dispatch(login(values))
//       .unwrap()
//       .then(res => {
//         toast.success(`Welcome, ${res.user.name}`);
//         navigate('/contacts', { replace: true });
//       })
//       .catch(() => {
//         toast.error('Invalid data');
//       });
//     actions.resetForm();
//   };
//   return (
//     <div className="container">
//       <div className={css.block}>
//         <h2 className={css.logTitle}>Login</h2>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//           validationSchema={FeedbackSchema}
//         >
//           <Form>
//             <FieldBase
//               name="email"
//               label="Email"
//               placeholder="Enter email"
//               type="email"
//             />
//             <FieldBase
//               name="password"
//               label="Password"
//               placeholder="Enter password"
//               type="password"
//             />
//             <button type="submit" className={css.buttonForm}>
//               Login
//             </button>
//           </Form>
//         </Formik>
//         <p className={css.link}>
//           Don`t have an account? <br />
//           <Link to="/register" className={css.linkreg}>
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .email('Must be a valid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  const onSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => {
        toast.error('Invalid data');
      });
    actions.resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Login success');
        navigate('/contacts', { replace: true });
      })
      .catch(() => {
        toast.error('Login error');
      });

    form.reset();
  };

  return (
    <div className="container">
      <div className={css.block}>
        <h2 className={css.logTitle}>Login</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form}>
            <label className={css.label}>
              Email
              <Field type="email" name="email" className={css.input} />
            </label>
            <label className={css.label}>
              Password
              <Field type="password" name="password" className={css.input} />
            </label>
            <button type="submit" className={css.buttonForm}>
              Login
            </button>
          </Form>
        </Formik>
        <p className={css.link}>
          Don`t have an account? <br />
          <Link to="/register" className={css.linkreg}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;