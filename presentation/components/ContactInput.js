export default `import React from 'react';
import PropTypes from 'prop-types';

const ContactInput = ({ newContact, handleContactUpdated, handleContactAdded }) =>
  (
    <form onSubmit={handleContactAdded}>
      <input 
        placeholder="name" 
        name="name" 
        type="text" 
        onChange={handleContactUpdated} 
        value={newContact.name} 
      />
      <input 
        placeholder="phone" 
        name="phone" type="tel" 
        onChange={handleContactUpdated} 
        value={newContact.phone} 
      />
      <input 
        placeholder="email" 
        name="email" 
        type="email" 
        onChange={handleContactUpdated} 
        value={newContact.email} 
      />
      <textarea 
        placeholder="description" 
        name="description" 
        onChange={handleContactUpdated} 
        value={newContact.description} 
      />
      <button type="submit" value="Submit">Add Contact</button>
    </form>
  );

export default ContactInput;

ContactInput.propTypes = {
  handleContactAdded: PropTypes.func.isRequired,
  handleContactUpdated: PropTypes.func.isRequired,
  newContact: PropTypes.objectOf(PropTypes.string).isRequired,
};`;
