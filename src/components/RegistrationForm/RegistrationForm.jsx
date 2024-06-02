import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import toast from 'react-hot-toast';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const darkMode = {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    };
    dispatch(register(values), darkMode)
      .unwrap()
      .then(reponse => {
        toast.success('Success!!!');
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
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
      <h2 className={css.title}>Register</h2>
        <label>
          <Field className={css.input} type="text" name="name" />
          <span>Username</span>
        </label>
        <label>
          <Field className={css.input} type="email" name="email" placeholder="" required="" />
          <span>Email</span>
        </label>
        <label>
          <Field className={css.input} type="password" name="password" placeholder="" required="" />
          <span>Password</span>
        </label>
        <button className={css.submit} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
