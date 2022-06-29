import { useState } from "react";

import { useAddContactsMutation } from "../../redux/contacts/contacts-operation";
import toast, { Toaster } from "react-hot-toast";

export default function Form({ contacts }) {
  const [addContacts] = useAddContactsMutation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const returnName = contacts.find((contact) => contact.name === name);
    if (returnName) {
      toast.error("This name is already in the phonebook ");
    } else {
      addContacts({ name, number }).then(console.log);
      toast.success("Successfully !");
    }

    setName("");
    setNumber("");
  };

  return (
    <div className="form-outline">
      <form onSubmit={onSubmitForm}>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Number
          </span>
          <input
            type="tel"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-success" type="submit">
            Add contact
          </button>
        </div>
      </form>
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
}
