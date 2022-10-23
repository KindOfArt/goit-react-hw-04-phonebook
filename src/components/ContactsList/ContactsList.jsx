import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactsList = ({ foundContact, deleteContact }) => {
  return (
    <ul className={style.ul}>
      {foundContact.map(({ id, name, number }) => {
        return (
          <li className={style.li} key={id}>
            <p>{name}</p>
            <p>{number}</p>

            <button
              type="button"
              onClick={() => deleteContact(id)}
              className={style.button}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  foundContact: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
