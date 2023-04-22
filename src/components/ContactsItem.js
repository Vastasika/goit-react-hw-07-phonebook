import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from '../components/Form/Form.module.css';

const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.liitem}>
      <div>
        <span>{name}: </span>
        <span>{phone}</span>
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