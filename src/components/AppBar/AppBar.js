import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { authSelectors } from "../../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { logOut } from "../../redux/auth/auth-operation";
import UserMenu from "../UserMenu/UserMenu";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};
const AppBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <header style={styles.header}>
        <Nav>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </Nav>

        <Nav>
          {isLoggedIn ? (
            <div style={styles.container}>
              <span style={styles.name}>Welcome, {name}</span>

              <button type="button" onClick={() => dispatch(logOut())}>
                Выйти
              </button>
            </div>
          ) : (
            <AuthNav />
          )}
        </Nav>
      </header>
    </Navbar>
  );
};

export default AppBar;
