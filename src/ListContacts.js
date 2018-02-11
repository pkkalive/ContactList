import React, {Component} from 'react';
import PropType from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
  static propTypes = {
    contact: PropType.array.isRequired,
    onDeleteContact: PropType.func.isRequired
  }
  state ={
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }
  render(){
    const { contact, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      // console.log(match.test('Tyler')) helps to test query expression
      showingContacts = contact.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contact
    }
    showingContacts.sort(sortBy('name'))
    return (
      <div className = 'list-contacts'>
        <div className = 'list-contacts-top'>
          <input className = 'search-contacts'
            type ='text'
            placeholder='Search Contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className = 'contact-list'>
          {
            showingContacts.map((contact) => (
              <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style ={{
                  backgroundImage: `url(${contact.avatarURL})`
                }} />
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                  Remove
                </button>
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts;
