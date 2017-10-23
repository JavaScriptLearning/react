export default `import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  const items = contacts.map(contact => <Contact key={contact.email} contact={contact} />);

  return (
    <div>
      {items}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
`;
