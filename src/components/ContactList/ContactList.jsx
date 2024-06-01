import { useSelector } from 'react-redux';

import { selectFilteredContacts  } from '../../redux/filters/selectors';
import { Contact } from 'components';

export function ContactList() {
  const visibleValue = useSelector(selectFilteredContacts);

  return (
    visibleValue && (
      <ul>
        {visibleValue.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    )
  );
}
