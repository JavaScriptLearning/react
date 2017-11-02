export default `import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) =>
  (
    <div>
      {contact.name ? <h3>{contact.name}</h3> : null}
      {contact.phone ? <h3>{contact.phone}</h3> : null}
      {contact.email ? <h3>{contact.email}</h3> : null}
      {contact.description ? <p>{contact.description}</p> : null}
    </div>
  );

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
