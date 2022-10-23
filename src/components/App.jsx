import Section from './Section/Section';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import appStyles from './App.module.css';
import React, { useState } from 'react';
import Filter from './Filter/Filter';

const App = props => {
  const [contactsList, setContactsList] = useState([]);
  const [filter, setFilter] = useState('');

  const getFilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  const findContact = () => {
    const normilizedFilter = filter.toLowerCase();

    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(normilizedFilter)
    );
  };

  const addNewContact = contact => {
    const { name } = contact;
    const normilizedName = name.toLowerCase();

    !contactsList.find(
      ({ name: prevName }) => prevName.toLowerCase() === normilizedName
    )
      ? setContactsList(prev => [...prev, contact])
      : alert(`${name} is already in contacts!`);
  };

  const deleteContact = contactId => {
    setContactsList(contactsList.filter(({ id }) => id !== contactId));
  };

  return (
    <div className={appStyles.app}>
      <Section title="Phonebook">
        <Form addToContactList={addNewContact}></Form>
      </Section>
      <Section title="Contacts">
        {contactsList.length > 0 && (
          <>
            <Filter value={filter} onChange={getFilterValue} />
            <ContactsList
              foundContact={findContact()}
              deleteContact={deleteContact}
            />
          </>
        )}
      </Section>
    </div>
  );
};

export default App;
