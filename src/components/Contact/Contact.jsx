import { FaUserAstronaut } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';
import { MdDeleteSweep, MdOutlineModeEditOutline } from 'react-icons/md';
import { BsSendArrowUpFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, editContact } from '../../redux/contacts/operations';
import { selectContactsEdit } from '../../redux/contacts/selectors';
import { isEditContact, editName, editNumber } from '../../redux/contacts/slice';

import css from './Contact.module.css';
import toast from 'react-hot-toast';

export function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const editingContact = useSelector(selectContactsEdit);

  const verifyDelete = () => {
    const darkMode = {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    };
    toast(t => (
      <span>
        Are you sure?
        <button
          onClick={() => {
            dispatch(deleteContact(id));
            toast.dismiss(t.id);
          }}
        >
          Yes
        </button>
        <button onClick={() => toast.dismiss(t.id)}>Cancel</button>
      </span>
    ), darkMode);
  };

  return (
    <li className={css['contact-box']}>
      <div className={css['contact-info']}>
        <div className={css['contact-info-item']}>
          <FaUserAstronaut />
          {editingContact.id === id ? (
            <input
            className={css['edit-contact-input']}
              type="text"
              value={editingContact.name}
              onChange={evt => dispatch(editName(evt.target.value))}
            />
          ) : (
            <p>{name}</p>
          )}
        </div>
        <div className={css['contact-info-item']}>
          <CgSmartphone />
          {editingContact.id === id ? (
            <input
            className={css['edit-contact-input']}
              type="text"
              onChange={evt => dispatch(editNumber(evt.target.value))}
              value={editingContact.number}
            />
          ) : (
            <p>{number}</p>
          )}
        </div>
      </div>

      <ul className={css['contact-buttons']}>
        <li>
          <button
            type="button"
            onClick={() =>
              dispatch(
                editingContact.id === id
                  ? editContact(editingContact)
                  : isEditContact({ id, name, number })
              )
            }
          >
            {editingContact.id === id ? <BsSendArrowUpFill /> : <MdOutlineModeEditOutline />}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => verifyDelete()}>
            <MdDeleteSweep />
          </button>
        </li>
      </ul>
    </li>
  );
}
