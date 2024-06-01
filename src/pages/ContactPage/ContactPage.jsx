import 'modern-normalize';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SkewLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { ContactForm, SearchBox, ContactList } from 'components';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectContactsLoading, selectContactsError } from '../../redux/contacts/selectors';

import css from './ContactPage.module.css'

export default function ContactPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.contacts}>
      <ContactForm />
      <SearchBox />
      {loading && <SkewLoader color="#646cff" />}
      {error ? error : <ContactList />}
    </section>
  );
}
