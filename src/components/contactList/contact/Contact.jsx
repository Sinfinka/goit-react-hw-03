import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={css.wrapper}>
        <HiUser />
        <div> {contact.name} </div>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <div> {contact.number} </div>
      </div>

      <button
        className={css.btn}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </>
  );
}
