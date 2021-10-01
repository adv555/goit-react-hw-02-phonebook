import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li className={s.contactListItem} id={id} key={id}>
            <p className={s.text}>{name}</p>
            <p className={s.text}>{number}</p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
