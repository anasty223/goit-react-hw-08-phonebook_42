import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul className="list-group list-group-light list-group-small">
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          func={onDeleteContact}
        />
      ))}
    </ul>
  );
}
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
