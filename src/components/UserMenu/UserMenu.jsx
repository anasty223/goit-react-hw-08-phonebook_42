import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operation";
import { Navbar, Nav, Button } from "react-bootstrap";
const styles = {
  header: {
    display: "flex",
    alignItems: "center",

    marginLeft: "auto",
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <>
      <div style={styles.container}>
        <Navbar.Brand>Welcome, {name}</Navbar.Brand>

        <Button
          className="mr-10"
          variant="outline-success"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </Button>
      </div>
    </>
  );
}
