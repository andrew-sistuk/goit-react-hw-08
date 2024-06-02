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
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
