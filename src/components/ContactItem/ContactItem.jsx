import PropTypes from "prop-types";

function ContactItem({ name, number, func, id }) {
  return (
    <li className="list-group-item">
      <h3 className="text-muted">{name}</h3>
      <p>{number}</p>
      <div className="position-absolute top-0 end-0">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => func(id)}
        ></button>
      </div>
    </li>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  func: PropTypes.func.isRequired,
  id: PropTypes.string,
};
