export default `import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ contacts }) => 
  (
    <div>
      {contacts.map(contact => <Contact key={contact.email} contact={contact} />)}
    </div>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
`;
