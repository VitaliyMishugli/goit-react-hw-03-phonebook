import React from "react";
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

const LS_KEY = 'contacts';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem(LS_KEY))
    })
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  }

  contactId = nanoid();

  formSubmitHandler = ({ name, number }) => {
    this.addContact(name, number);
  }

  handleChange = event => {
    let { name, value } = event.currentTarget;

    this.setState({
      [name]: value
    })
  }

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
    } else {
      if (name !== '' && number !== '') {
        this.setState((prevState) => {
          return {
            ...prevState,
            contacts: [...prevState.contacts, { id: this.contactId, name: name, number: number }]
          }
        });
      }
      else {
        alert("Enter name and contact number");
      }
    }
  }

  changeFitler = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <div>
        <h1>Phonebook 3</h1>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFitler} />
        <ContactList visibleContacts={visibleContacts} contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
