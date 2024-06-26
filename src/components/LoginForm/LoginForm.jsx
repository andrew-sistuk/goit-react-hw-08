import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const darkMode = {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    };
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        toast.success('Success!!!', darkMode);
        console.log(reponse);
      })
      .catch(error => {
        toast.error(error, darkMode);
        console.log(error);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <h2 className={css.title}>Login</h2>

        <label>
          <Field className={css.input} type="email" name="email" placeholder="" required="" />
          <span>Email</span>
        </label>
        <label>
          <Field className={css.input} type="password" name="password" placeholder="" required="" />
          <span>Password</span>
        </label>
        <button className={css.submit} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
