import React, { Component } from 'react';

class ContactList extends Component {
  render(){
    const people = this.props.contacts;

    return (
        <ol>
          {people.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ol>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className = "App">
        <ContactList contacts={[
          { name: 'Tammu' },
          { name: 'Purushotham' },
          { name: 'Vijaya' },
          { name: 'Lalita' }
        ]}/>
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Tom' },
          { name: 'Alex' },
          { name: 'Lakshmi' }
        ]}/>
        <ContactList contacts={[
          { name: 'Ryan' },
          { name: 'Kumar' },
          { name: 'Tyler' },
          { name: 'Robert' }
        ]}/>
        <ContactList contacts={[
          { name: 'Andria' },
          { name: 'Marta' },
          { name: 'Furnkia' },
          { name: 'Sonia' }
        ]}/>
      </div>
    );
  }
}

export default App;
