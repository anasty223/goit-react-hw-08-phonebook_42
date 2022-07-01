import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { authSelectors } from "../../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import UserMenu from "../UserMenu/UserMenu";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",

    marginLeft: "auto",
  },
};
const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Navigation />
      </Nav>
      <header style={styles.header}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Navbar>
  );
};

export default AppBar;
