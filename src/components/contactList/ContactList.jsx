import Contact from "./contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
