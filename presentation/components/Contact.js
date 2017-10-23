export default `import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const name = contact.name ? <h3>{contact.name}</h3> : null;
  const phone = contact.phone ? <h3>{contact.phone}</h3> : null;
  const email = contact.email ? <h3>{contact.email}</h3> : null;
  const description = contact.description ? <p>{contact.description}</p> : null;


  return (
    <div>
      {name}
      {phone}
      {email}
      {description}
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
`;
