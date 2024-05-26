import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsOps';
import { INITIAL_VALUE } from '../../redux/constants';

import css from './ContactForm.module.css';

export function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().trim().min(3, 'Too short').max(50, 'Too long').required('Required'),
  });

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(
      addContact({
        name,
        number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUE} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css['contact-form']}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field
          className={css['contact-field']}
          type="text"
          name="name"
          placeholder="Input name"
          id={`${id}-name`}
        />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={`${id}-number`}>Contact</label>
        <Field
          className={css['contact-field']}
          type="text"
          name="number"
          placeholder="Input number"
          id={`${id}-number`}
        />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
