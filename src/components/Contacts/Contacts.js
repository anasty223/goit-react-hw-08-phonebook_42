import Container from "../Container/Container";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import { ToastContainer } from "react-toastify";

export default function Contacts() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />

      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
      <ToastContainer />
    </Container>
  );
}
