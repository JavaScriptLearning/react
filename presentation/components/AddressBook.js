export default `import React from 'react';
import ContactInput from './ContactInput';
import ContactList from './ContactList';

class AddressBook extends React.Component {
  state = {
    contacts: [],
    newContact: {
      name: '',
      phone: '', 
      email: '', 
      description: '',
    },
  }

  handleContactUpdated = (event) => {
    const { value, name } = event.target;
    const contact = Object.assign({}, this.state.newContact, { [name]: value });

    this.setState({ newContact: contact });
  }

  handleContactAdded = (event) => {
    event.preventDefault();
    const contactsList = this.state.contacts;
    contactsList.push(this.state.newContact);

    this.setState({
      newContact: {
        name: '', phone: '', email: '', description: '',
      },
      contacts: contactsList,
    });
  }

  render() {
    const { contacts, newContact } = this.state;

    return (
      <div>
        <ContactInput
          handleContactUpdated={this.handleContactUpdated}
          handleContactAdded={this.handleContactAdded}
          newContact={newContact}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default AddressBook;
`;
