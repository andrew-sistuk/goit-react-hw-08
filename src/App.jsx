import 'modern-normalize';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { SkewLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

import { Layout, ContactForm, SearchBox, ContactList } from 'components';

import { selectContactsLoading, selectContactsError } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <SkewLoader color="#646cff" />}
      {error ? error : <ContactList />}
    </Layout>
  );
}
