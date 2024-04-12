import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('savedContacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts))
  }, [contacts]);

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

    const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };
  
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;

