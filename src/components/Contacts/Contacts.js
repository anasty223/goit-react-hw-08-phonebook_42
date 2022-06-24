import Container from "../Container/Container";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import { ToastContainer } from "react-toastify";
const styles = {
  h2: {
    padding: 10,
    textAlign: "center",
    fontSize: 30,
  },
};
export default function Contacts() {
  return (
    <Container>
      <h2 style={styles.h2}>Phonebook</h2>

      <Form />

      <Filter />
      <h2 style={styles.h2}>Contacts List</h2>
      <ContactsList />
      <ToastContainer />
    </Container>
  );
}
