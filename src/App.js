import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    myScreen : 'list',
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

  navigateToCreate = () =>{
    this.setState({ myScreen : 'create' })
  }
  render() {
    return (
      <div className = "app">
      {this.state.myScreen === 'list' && (
        <ListContacts
          contact = {this.state.contacts}
          onDeleteContact = {this.removeContact}
          onNavigate = {this.navigateToCreate}
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
