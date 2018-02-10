import React, {Component} from 'react';

class ListContacts extends Component {
  render(){
    return (
      <ol className = 'contact-list'>
        {
          this.props.contact.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))
        }
      </ol>
    )
  }
}

export default ListContacts;
