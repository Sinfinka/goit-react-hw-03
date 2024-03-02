import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";

export default function Contact({ contact }) {
  return (
    <div>
      <HiUser />
      <div> {contact.name} </div>
      <FaPhoneAlt />
      <div> {contact.number} </div>

      <button>Delete</button>
    </div>
  );
}
