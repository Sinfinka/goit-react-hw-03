import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import { useState, useEffect } from "react";
import contactsData from "./../../contacts.json";
import css from "./App.module.css";

const SavedContacts =
  localStorage.getItem("contacts") !== null
    ? JSON.parse(localStorage.getItem("contacts"))
    : contactsData;

function App() {
  const [contacts, setContacts] = useState(SavedContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFormSubmit = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.conteiner}>
      <div className={css.header}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
      <div className={css.contacts}>
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}

export default App;
