import React from "react";
import PropTypes from 'prop-types';
import {ContactItem}  from '../ContactItem/ContactItem';

export const ContactList = ({ visibleContacts, onDeleteContact}) => {
  return (
    <ul>
      {visibleContacts.map(({ name, id, number }) => (
        <li key={id} style={{ marginBottom: '10px' }}>
          <ContactItem name={name} id={id} number={number} onDeleteContact={ onDeleteContact} />
          {/* <span style={{marginRight: '10px'}}>{name} : {number}</span>
          <button onClick={()=>onDeleteContact(id)}>Delete</button> */}
        </li>))}
    </ul>
  )
}

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired  
}

