import 'styles/shared.scss';
import shortid from 'shortid';
import { Component } from 'react';
import Header from 'components/Header';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    // setTimeout(() => {
    // console.log(name, number);
    // }, 1000);
    // console.log(this.state.contacts);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const existContact = this.state.contacts.some(item => item.name === name);
    // console.log(existContact);

    !existContact
      ? this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
      : alert(`${name} is already in the contact`);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const addContact = this.addContact;
    const deleteContact = this.deleteContact;
    const { filter } = this.state;
    const changeFilterValue = this.changeFilter;
    const visibleContact = this.getFilterContacts();

    return (
      <div className="App">
        <Header title={'PhoneBook'}>
          <Filter value={filter} onChange={changeFilterValue} />
        </Header>
        <Section title={'Contacts'}>
          <Form onSubmit={addContact} />
          <ContactList
            contacts={visibleContact}
            onDeleteContact={deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
