import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import { useState, useEffect } from "react";
import contactsData from "./../../contacts.json";

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
      console.log("cont", newContact);

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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
