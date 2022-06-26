import PropTypes from "prop-types";
import { List } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          func={onDeleteContact}
        />
      ))}
    </List>
  );
}
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
