import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';
import { Route } from 'react-router-dom';

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
        <Route exact path = "/" render = {() => (
            <ListContacts
              contact = {this.state.contacts}
              onDeleteContact = {this.removeContact}
              onNavigate = {this.navigateToCreate}
            />
          )}
          />
          <Route path = "/create" component = { CreateContact } />
      </div>
    );
  }
}

export default App;
