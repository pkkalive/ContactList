import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    myScreen : 'create',
    contacts : []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts: contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state) =>({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div className = "app">
      {this.state.myScreen === 'list' && (
        <ListContacts
          onDeleteContact = {this.removeContact}
          contact = {this.state.contacts}
        />
      )}
      {this.state.myScreen === 'create' && (
        <CreateContact />

      )}
      </div>
    );
  }
}

export default App;
