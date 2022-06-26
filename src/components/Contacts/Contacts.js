import Container from "../Container/Container";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/items-selectors";
import ContactsList from "../ContactsList/ContactsList";
import { ToastContainer } from "react-toastify";
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/contacts/contacts-operation";

const styles = {
  h2: {
    padding: 10,
    textAlign: "center",
    fontSize: 30,
  },
};
export default function Contacts() {
  const { data, isLoading } = useGetContactsQuery();
  console.log("data", data);
  const filter = useSelector(getFilter);

  const [deleteContact] = useDeleteContactsMutation();

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <Container>
      <h2 style={styles.h2}>Phonebook</h2>

      <Form contacts={data} />

      <Filter />
      <h2 style={styles.h2}>Contacts List</h2>
      {data && (
        <ContactsList
          contacts={getVisibleContact()}
          onDeleteContact={deleteContact}
        />
      )}
      <ToastContainer />
    </Container>
  );
}
