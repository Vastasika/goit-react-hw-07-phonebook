import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from '../components/Form/Form.module.css';

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.liitem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <button
        className={css.itembtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactsItem;