import React, {Component} from 'react';
import PropType from 'prop-types'

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
    return (
      <div className = 'list-contacts'>
      {JSON.stringify(this.state)}
        <div className = 'list-contacts-top'>
          <input className = 'search-contacts'
            type ='text'
            placeholder='Search Contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className = 'contact-list'>
          {
            this.props.contact.map((contact) => (
              <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style ={{
                  backgroundImage: `url(${contact.avatarURL})`
                }} />
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
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
